export default `
The \`ReactSheetDialog\` is a responsive UI component which displays as a dialog or as a sheet based on the \`dialogType\` prop.

The component has two main parts:

- The header, which contains the title and a close button. Clicking on the close button or pressing the Escape key will close the sheet/dialog.

- The content, which varies depending on the \`dialogType\` prop. The content is either a \`StandardDialogContent\` or a \`SheetDialogContent\`.

When the sheet/dialog is open, focus is moved to the header, and focus is trapped within the sheet/dialog. This means that if you try to tab out of the sheet/dialog, focus will wrap around to the first focusable element in the sheet/dialog.

When the sheet/dialog is closed, focus is returned to the button that opened the sheet/dialog.

The component uses WAI-ARIA roles, states, and properties to ensure its accessibility.

## Usage

\`\`\`jsx
import React from 'react';
import ReactSheetDialog from './ReactSheetDialog';

<ReactSheetDialog modal={true} dialogType='sheet' />
\`\`\`
`;