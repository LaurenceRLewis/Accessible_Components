import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import SheetDialogContent from "./SheetDialogContent";
import StandardDialogContent from "./StandardDialogContent";
import styles from "./ReactSheet.module.css";

function ReactSheetDialog(props) {
  // Declare state variable for sheet/dialog open state
  const [open, setOpen] = useState(false);
  // Destructure the modal and dialogType props
  const { modal, dialogType } = props;

  // Function to open the sheet/dialog
  const openSheet = () => {
    setOpen(true);
  };

  // Function to close the sheet/dialog
  const closeSheet = () => {
    setOpen(false);
  };

  //Esc key closes modal only
  // const handleEscKey = (event) => {
  //   if (event.key === "Escape" && open && modal) {
  //     closeSheet();
  //   }
  // };

  //Esc key closes modal and non-modal
  const handleEscKey = (event) => {
    if (event.key === "Escape" && open) {
      closeSheet();
    }
  };

  const isStandardDialog = dialogType === "standard";
  // Determine the sheet class based on the open state
  const sheetOpenClass = open ? styles.open : "";
  // Determine if the overlay should be displayed
  const overlayClass = open && modal;
  // Combine sheet classes based on the dialog type
  const sheetStyle = classNames(
    styles.sheet,
    {
      [styles.standardDialog]: isStandardDialog,
      [styles.sheetModal]: !isStandardDialog,
      [styles.hidden]: !open,
    },
    sheetOpenClass
  );

  // Function to apply or remove 'aria-hidden' attribute on elements outside the dialog
  const setAriaHiddenOnSiblings = (isOpen) => {
    const rootNode = ReactDOM.findDOMNode(props.rootNode || document.body);
    const siblings = Array.from(rootNode.children).filter(
      (child) => child !== rootNode
    );

    siblings.forEach((sibling) => {
      if (isOpen) {
        sibling.setAttribute("aria-hidden", "true");
      } else {
        sibling.removeAttribute("aria-hidden");
      }
    });
  };

  // Add event listener for keydown events to handle Esc key press
  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [handleEscKey]);

  // Set focus on the sheet heading when the sheet/dialog opens
  useEffect(() => {
    if (open) {
      document.getElementById("sheet-heading").focus();
    }
  }, [open]);

  // Add an effect to return focus to the triggering button when sheet/dialog is closed
  useEffect(() => {
    if (!open) {
      const sideSheetButton = document.getElementById("side-sheet-button");
      if (sideSheetButton) {
        sideSheetButton.focus();
      }
    }
  }, [open]);

  // Apply or remove 'aria-hidden' attribute on elements outside the dialog when the modal is open or closed
  useEffect(() => {
    if (modal) {
      setAriaHiddenOnSiblings(open);
    }
  }, [modal, open]);

  // Exit early if the sheet is closed or not a modal
  const trapFocus = (event) => {
    if (!open || !modal) {
      return;
    }

    // Check if the Tab key was pressed
    const isTabPressed = event.key === "Tab" || event.keyCode === 9;

    // Exit early if the pressed key is not Tab
    if (!isTabPressed) {
      return;
    }

    // Define the CSS selectors for focusable elements
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableContent = document.querySelectorAll(focusableElements);
    // Filter out any hidden elements from the list of focusable elements
    const trapElements = Array.from(focusableContent).filter(
      (el) => el.offsetParent !== null
    );

    // Identify the first and last focusable elements within the modal
    const firstTrapEl = trapElements[0];
    const lastTrapEl = trapElements[trapElements.length - 1];

    // Trap focus by moving focus to the last focusable element when
    // the Shift key is held down and the first element is focused
    if (event.shiftKey) {
      if (document.activeElement === firstTrapEl) {
        lastTrapEl.focus();
        event.preventDefault();
      }
      // Trap focus by moving focus to the first focusable element when
      // the last element is focused without the Shift key held down
    } else {
      if (document.activeElement === lastTrapEl) {
        firstTrapEl.focus();
        event.preventDefault();
      }
    }
  };

  return (
    <>
      <button
        onClick={openSheet}
        id="side-sheet-button"
        className={styles.sideSheetButton}
      >
        Open Sheet
      </button>
      {overlayClass && <div className={styles.overlay}></div>}
      <div
        className={sheetStyle}
        role="dialog"
        aria-labelledby="sheet-heading"
        {...(modal ? { "aria-modal": true } : {})}
        {...(open ? {} : { "aria-hidden": "true" })}
        onKeyDown={(event) => {
          trapFocus(event);
        }}
      >
        <div className={styles.sheetHeader}>
          <h2 id="sheet-heading" className={styles.sheetHeading} tabIndex="-1">
            Sheet Dialog
          </h2>
          <button className={styles.closeButton} onClick={closeSheet}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#7B61C4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${styles.sheetContent} ${styles.contentContainer}`}
          tabIndex={0}
        >
          {isStandardDialog ? (
            <StandardDialogContent />
          ) : (
            <SheetDialogContent />
          )}
        </div>
      </div>
    </>
  );
}

export default ReactSheetDialog;
