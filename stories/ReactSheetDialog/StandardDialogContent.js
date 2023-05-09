import React from 'react';

function StandardDialogContent() {
  return (
    <>
      <h3>Control Props</h3>
          <p>
            This component has two control props: <code>modal</code> and{" "}
            <code>dialogType</code>.
          </p>
          <ul>
            <li>
              <code>modal</code>: Determines if the dialog is modal. Focus is trapped inside the dialog. For a standard dialog this should be set to true.
            </li>
            <li>
              <code>dialogType</code>: Defines the type of dialog to display,
              either "sheet" or "standard". It accepts a string value (default:
              "sheet").
            </li>
          </ul>
          <h3>Standard Dialog</h3>
          <p>
            Standard dialogs are used to display more critical information,
            prompt user input, or present actions that require the user's full
            attention. They usually appear in the center of the screen, with a
            backdrop that prevents interaction with the content underneath. Use
            standard dialogs for confirmation dialogs, user input forms, or when
            the user must complete an action before proceeding.
          </p>
    </>
  );
}

export default StandardDialogContent;