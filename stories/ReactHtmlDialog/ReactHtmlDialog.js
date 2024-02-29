import React, { useEffect, useRef } from 'react';
import styles from './ReactHtmlDialog.module.css';

function ReactHtmlDialog({ open, setOpen, showModal, heading, children, ariaHidden, inert, ariaModal, focusManagement, useAutoFocus }) {
    const dialogRef = useRef();
    const headingRef = useRef();
    const contentRef = useRef(); // Ref for the div container

    useEffect(() => {
        if (open) {
            showModal === 'Yes' ? dialogRef.current.showModal() : dialogRef.current.show();
        } else {
            dialogRef.current.close();
        }
    }, [open, showModal]);

    useEffect(() => {
        if (open) {
            // Set tabIndex to -1 for heading and container div by default
            headingRef.current?.setAttribute('tabIndex', '-1');
            contentRef.current?.setAttribute('tabIndex', '-1');

            if (useAutoFocus) {
                // Clear previous autoFocus attributes when dialog opens
                headingRef.current?.removeAttribute('autoFocus');
                contentRef.current?.removeAttribute('autoFocus');
                const firstFocusable = dialogRef.current?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                firstFocusable?.removeAttribute('autoFocus');

                // Swap the application of autoFocus based on the corrected focusManagement setting
                switch (focusManagement) {
                    case 'focus is set to the new div container': // This was 'focus is set to the dialog heading' before
                        headingRef.current?.setAttribute('autoFocus', '');
                        break;
                    case 'focus is set to the dialog heading': // This was 'focus is set to the new div container' before
                        contentRef.current?.setAttribute('autoFocus', '');
                        break;
                    case 'focus is set to the first focusable element inside the dialog':
                        if (firstFocusable) {
                            firstFocusable.setAttribute('autoFocus', '');
                        }
                        break;
                }
            } else {
                // Apply tabIndex and manual focus based on the corrected focusManagement setting
                switch (focusManagement) {
                    case 'focus is set to the new div container': // This was 'focus is set to the dialog heading' before
                        headingRef.current?.focus();
                        break;
                    case 'focus is set to the dialog heading': // This was 'focus is set to the new div container' before
                        contentRef.current?.focus();
                        break;
                    case 'focus is set to the first focusable element inside the dialog':
                        const firstFocusable = dialogRef.current?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                        if (firstFocusable) {
                            firstFocusable.focus();
                        }
                        break;
                }
            }
        }
    }, [open, focusManagement, useAutoFocus]);

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <div ref={contentRef} tabIndex="-1" className={styles.containerDiv}>
                <h2 ref={headingRef} tabIndex="-1">
                    {heading}
                </h2>
                {children}
                <button type="button" onClick={() => setOpen(false)} className={styles.closeButton}>Close</button>
            </div>
        </dialog>
    );
}

export default ReactHtmlDialog;