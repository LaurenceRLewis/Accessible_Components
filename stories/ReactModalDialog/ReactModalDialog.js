import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import SheetDialogContent from "./SheetDialogContent";
import StandardDialogContent from "./StandardDialogContent";
import styles from "./ReactModalDialog.module.css";

function ReactModalDialog(props) {
  const [open, setOpen] = useState(false);
  const { modal, dialogType, backgroundAttribute } = props;

  const openSheet = () => {
    setOpen(true);
  };

  const closeSheet = () => {
    setOpen(false);
  };

  const handleEscKey = (event) => {
    if (event.key === "Escape" && open) {
      closeSheet();
    }
  };

  useEffect(() => {
    if (!open) {
      const modalContentContainer = document.querySelector(
        `.${styles.sheetContent}`
      );
      if (modalContentContainer) {
        modalContentContainer.removeAttribute("tabindex");
      }
    }
  }, [open]);

  const isStandardDialog = dialogType === "standard";
  const sheetOpenClass = open ? styles.open : "";
  const overlayClass = open && modal;
  const sheetStyle = classNames(
    styles.sheet,
    {
      [styles.standardDialog]: isStandardDialog,
      [styles.sheetModal]: !isStandardDialog,
      [styles.hidden]: !open,
    },
    sheetOpenClass
  );

  const setAriaHiddenOrInertOnSiblings = (isOpen) => {
    const rootNode = props.rootNode || document.body;
    const siblings = Array.from(rootNode.children).filter(
      (child) => child !== rootNode && child.id !== "storybook-root"
    );

    siblings.forEach((sibling) => {
      if (modal && isOpen) {
        if (backgroundAttribute === "aria-hidden") {
          sibling.setAttribute("aria-hidden", "true");
          sibling.removeAttribute("inert");
        } else if (backgroundAttribute === "inert") {
          sibling.setAttribute("inert", "");
          sibling.removeAttribute("aria-hidden");
        }
      } else {
        sibling.removeAttribute("aria-hidden");
        sibling.removeAttribute("inert");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [handleEscKey]);

  useEffect(() => {
    if (open) {
      document.getElementById("sheet-heading").focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      const sideSheetButton = document.getElementById("side-sheet-button");
      if (sideSheetButton) {
        sideSheetButton.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    setAriaHiddenOrInertOnSiblings(open);
  }, [modal, open, backgroundAttribute]);

  const trapFocus = (event) => {
    if (!open || !modal) {
      return;
    }

    const isTabPressed = event.key === "Tab" || event.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modalContent = document.querySelector(`.${styles.sheet}`);
    const focusableContent = modalContent.querySelectorAll(focusableElements);

    const trapElements = Array.from(focusableContent).filter(
      (el) => el.offsetParent !== null
    );

    const firstTrapEl = trapElements[0];
    const lastTrapEl = trapElements[trapElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstTrapEl) {
        lastTrapEl.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastTrapEl) {
        firstTrapEl.focus();
        event.preventDefault();
      }
    }
  };

  const [contentNeedsScrolling, setContentNeedsScrolling] = useState(false);
  useEffect(() => {
    if (open) {
      const contentElement = document.querySelector(`.${styles.sheetContent}`);
      setContentNeedsScrolling(
        contentElement.scrollHeight > contentElement.clientHeight
      );
    }
  }, [open]);

  return (
    <>
      <button
        onClick={openSheet}
        id="side-sheet-button"
        className={styles.sideSheetButton}
      >
        Open Sheet
      </button>
      {overlayClass && (
        <div
          className={styles.overlay}
          onClick={() => {
            const focusableElements =
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
            const modalContent = document.querySelector(`.${styles.sheet}`);
            const focusableContent =
              modalContent.querySelectorAll(focusableElements);
            const trapElements = Array.from(focusableContent).filter(
              (el) => el.offsetParent !== null
            );
            const firstTrapEl = trapElements[0];
            firstTrapEl.focus();
          }}
        ></div>
      )}
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
          <button
            className={styles.closeButton}
            onClick={closeSheet}
            aria-label="Close dialog"
          >
            <svg
              aria-hidden="true"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 36L36 12M12 12L36 36"
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
          tabIndex={contentNeedsScrolling ? 0 : undefined}
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

export default ReactModalDialog;