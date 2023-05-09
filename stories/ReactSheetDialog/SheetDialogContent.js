import React from 'react';

function SheetDialogContent() {
  return (
    <>
      <h3>Control Props</h3>
          <p>
            This component has two control props: <code>modal</code> and{" "}
            <code>dialogType</code>.
          </p>
          <ul>
            <li>
              <code>modal</code>: Determines if the sheet is modal. Focus is trapped inside the dialog.
            </li>
            <li>
              <code>dialogType</code>: Defines the type of dialog to display,
              either "sheet" or "standard". It accepts a string value (default:
              "sheet").
            </li>
          </ul>
          <h3>Sheet Dialog</h3>
          <p>
            Sheet dialogs are ideal for displaying content or actions related to
            the current context or page. They usually slide in from the edge of
            the screen and cover only a portion of the content, allowing the
            user to maintain a connection with the underlying page. Sheet
            dialogs are typically used for navigation menus, filters, or
            contextual actions on larger screens.
          </p>
    </>
  );
}

export default SheetDialogContent;