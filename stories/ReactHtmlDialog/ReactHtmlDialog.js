// ReactHtmlDialog.js
import React, { useEffect, useRef } from 'react';
import styles from './ReactHtmlDialog.module.css';

function ReactHtmlDialog({ open, showModal, heading, children, ariaHidden, inert }) {
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

  useEffect(() => {
    const dialogSiblingElements = Array.from(document.body.children).filter((child) => child !== dialogRef.current);
  
    dialogSiblingElements.forEach((siblingElement) => {
      if (open) {
        if (ariaHidden === 'true') {
          siblingElement.setAttribute('aria-hidden', 'true');
        } else if (ariaHidden === 'false') {
          siblingElement.setAttribute('aria-hidden', 'false');
        }
  
        if (inert === 'Yes') {
          siblingElement.setAttribute('inert', '');
        }
      } 
  
      if (ariaHidden === 'remove') {
        siblingElement.removeAttribute('aria-hidden');
      }
  
      if (inert === 'No') {
        siblingElement.removeAttribute('inert');
      }
    });
  }, [ariaHidden, inert, open]);  

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-modal={showModal === 'Yes'}>
      <h2 ref={headingRef} tabIndex="-1">{heading}</h2>
      <p>{children}</p>
    </dialog>
  );
}

export default ReactHtmlDialog;