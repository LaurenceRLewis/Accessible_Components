import React, { useState, useEffect } from "react";
import styles from "./ReactSheet.module.css";

function ReactSheetDialog(props) {
  const [open, setOpen] = useState(false);
  const { modal } = props;

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

  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [handleEscKey]);

  const trapFocus = (event) => {
    if (!open || !modal) {
      return;
    }

    const isTabPressed = event.key === "Tab" || event.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    const trapEl =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const trapContent = document.querySelectorAll(trapEl);
    const firstTrapEl = trapContent[0];
    const lastTrapEl = trapContent[trapContent.length - 1];

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

    if (!document.getElementById("sheet-heading").contains(event.target)) {
      event.stopPropagation();
      document.getElementById("sheet-heading").focus();
    }
  };

  const sheetClass = open ? styles.open : "";
  const overlayClass = open && modal;

  return (
    <>
      <button
        onClick={openSheet}
        id="side-sheet-button"
        className={styles.sideSheetButton}
      >
        Open Sheet
      </button>
      {/* ... */}
      {overlayClass && <div className={styles.overlay} onClick={closeSheet}></div>}
      <div
        className={`${styles.sheet} ${sheetClass}`}
        role="dialog"
        aria-labelledby="sheet-heading"
        {...(modal ? { 'aria-modal': true } : {})}
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
            &times;
          </button>
        </div>
        <div className={styles.sheetContent}>
          <p>This is the sheet dialog content.</p>
        </div>
      </div>
    </>
  );
}

export default ReactSheetDialog;