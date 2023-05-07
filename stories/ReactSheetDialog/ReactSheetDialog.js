import React, { useState, useEffect } from "react";
import classNames from "classnames";
import SheetDialogContent from './SheetDialogContent';
import StandardDialogContent from './StandardDialogContent';
import styles from "./ReactSheet.module.css";

function ReactSheetDialog(props) {
  const [open, setOpen] = useState(false);
  const { modal, dialogType } = props;

  const openSheet = () => {
    setOpen(true);
  };

  const closeSheet = () => {
    setOpen(false);
  };

  const handleEscKey = (event) => {
    if (event.key === "Escape" && open && modal) {
      closeSheet();
    }
  };

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

  const trapFocus = (event) => {
    if (!open || !modal) {
      return;
    }
  
    const isTabPressed = event.key === "Tab" || event.keyCode === 9;
  
    if (!isTabPressed) {
      return;
    }
  
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableContent = document.querySelectorAll(focusableElements);
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
        aria-hidden={!open}
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
            {isStandardDialog ? <StandardDialogContent /> : <SheetDialogContent />}
          </div>
        </div>
      </>
    );
  }

export default ReactSheetDialog;
              
