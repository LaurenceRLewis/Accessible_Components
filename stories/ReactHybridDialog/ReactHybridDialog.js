import React, { useState, useRef, useEffect } from 'react';
import styles from './ReactHybridDialog.module.css';

const ReactHybridDialog = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const lastFocusedElementRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isDialogOpen) {
        closeDialog();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDialogOpen]);

  const openDialog = () => {
    lastFocusedElementRef.current = document.activeElement;
    setDialogOpen(true);
    setIsMinimized(false);
    // Focus management and trap focus could be handled here if needed
  };

  const minimizeDialog = () => {
    setDialogOpen(false);
    setIsMinimized(true);
    // Focus on maximize button would be handled automatically by React's rendering
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setIsMinimized(false);
    lastFocusedElementRef.current?.focus();
  };

  const maximizeDialog = () => {
    setDialogOpen(true);
    setIsMinimized(false);
    // Focus management and trap focus could be handled here if needed
  };

  return (
    <>
      {isDialogOpen && (
        <dialog open ref={dialogRef} className={styles.dialog} aria-labelledby="dialogTitle">
          <h2 id="dialogTitle" tabIndex="-1">Modal or Modeless Behaviour</h2>
          <p>This dialog is non-modal. Esc function is added as it is not supported by the HTML dialog.</p>
          <button onClick={minimizeDialog}>Minimize</button>
          <button onClick={closeDialog}>Close</button>
        </dialog>
      )}
      <button onClick={openDialog}>Open (Almost) HTML Dialog</button>
      {isMinimized && (
        <div className={styles.minimized} aria-hidden="true">
          <button onClick={maximizeDialog}>Maximize Dialog</button>
        </div>
      )}
      <div className={styles.listlinks}>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><button type="button">Button 1</button></li>
          <li><a href="#">Link 2</a></li>
        </ul>
      </div>
    </>
  );
};

export default ReactHybridDialog;