import React, { useEffect, useRef } from 'react';
import styles from './ReactHtmlDialog.module.css';

function ReactHtmlDialog({ open, showModal, heading, children, ariaHidden, inert, ariaModal }) {
  const dialogRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    // Open or close the dialog based on the 'open' prop
    if (open) {
      if (showModal === 'Yes') {
        // Use showModal() method to open the dialog as a modal dialog
        dialogRef.current.showModal();
      } else {
        // Use show() method to open the dialog
        dialogRef.current.show();
      }
      // Set focus on the heading when the dialog opens. This should not be needed using autofocus.
      //The autofocus attribute applies to all elements, not just to form controls. However I can't get this to work so reverting to the programmatic method.
      headingRef.current.focus();
    } else if (dialogRef.current.open) {
      // Close the dialog if it is already open
      dialogRef.current.close();
    }
  }, [open, showModal]);

  useEffect(() => {
    const dialogSiblingElements = Array.from(document.body.children).filter((child) => child !== dialogRef.current);

    dialogSiblingElements.forEach((siblingElement) => {
      if (open) {
        if (ariaHidden === 'true') {
          // Set aria-hidden attribute to 'true' on sibling elements when the dialog is open
          siblingElement.setAttribute('aria-hidden', 'true');
        } else if (ariaHidden === 'false') {
          // Set aria-hidden attribute to 'false' on sibling elements when the dialog is open
          siblingElement.setAttribute('aria-hidden', 'false');
        }

        if (inert === 'Yes') {
          // Set inert attribute on sibling elements when the dialog is open
          siblingElement.setAttribute('inert', '');
        }
      } else {
        // Remove aria-hidden and inert attributes from sibling elements when the dialog is closed
        siblingElement.removeAttribute('aria-hidden');
        siblingElement.removeAttribute('inert');
      }
    });
  }, [ariaHidden, inert, open]);

  useEffect(() => {
    // Set the value of the aria-modal attribute on the dialog based on the 'ariaModal' prop
    if (ariaModal === 'true') {
      dialogRef.current.setAttribute('aria-modal', 'true');
    } else if (ariaModal === 'false') {
      dialogRef.current.setAttribute('aria-modal', 'false');
    } else if (ariaModal === 'remove') {
      // Remove the aria-modal attribute from the dialog
      dialogRef.current.removeAttribute('aria-modal');
    }
  }, [ariaModal]);

  return (
    <dialog ref={dialogRef} className={styles.dialog} autoFocus>
      <h2 ref={headingRef} tabindex="-1">
        {heading}
      </h2>
      <p>{children}</p>
    </dialog>
  );
}

export default ReactHtmlDialog;