import React, { useEffect, useRef } from 'react';
import styles from './ReactHtmlDialog.module.css';

function ReactHtmlDialog({ open, showModal, heading, children }) {
  const dialogRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    if (open) {
      showModal === 'Yes' ? dialogRef.current.showModal() : dialogRef.current.show();
      headingRef.current.focus();
    } else if (dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [open, showModal]);

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-modal={showModal === 'Yes'}>
      <h2 ref={headingRef} tabIndex="-1">{heading}</h2>
      <p>{children}</p>
    </dialog>
  );
}

export default ReactHtmlDialog;