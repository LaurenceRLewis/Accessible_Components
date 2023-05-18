export default `
The \`AccordionTabComponent\` is a responsive UI component which displays as an accordion in smaller viewports and as tabs in larger viewports. This adaptive behavior is controlled by the \`viewportThreshold\` prop.

Each tab/accordion item has two main parts:

- The header (either a Tab or AccordionButton), which displays the title. Interacting with the header (mouse click or keyboard controls) will change the selected tab.

- The content (either a TabPanel or AccordionPanel), which is shown when its corresponding header is selected.

In the tab view, the component supports keyboard navigation between tabs using the Arrow, Home, and End keys, in line with WAI-ARIA recommendations. 

The component's selection behavior (automatic or manual) can be configured via the \`triggerActivation\` prop. In automatic mode, moving keyboard focus to a tab will automatically select it. In manual mode, a tab must be clicked or selected with the Enter or Space key to be activated.

The component uses WAI-ARIA roles, states, and properties to ensure its accessibility. 

## Usage

\`\`\`jsx
import React from 'react';
import { AccordionTabComponent } from './AccordionTabs';

const tabs = [
  {
    id: 'tab1',
    title: 'Tab 1',
    content: 'Content for tab 1',
  },
  {
    id: 'tab2',
    title: 'Tab 2',
    content: 'Content for tab 2',
  },
  // More tabs...
];

<AccordionTabComponent tabs={tabs} viewportThreshold={400} triggerActivation="manual" />
\`\`\`

## Props and Methods

| Prop name           | Type                                         | Description                                                                                              |
|---------------------|----------------------------------------------|----------------------------------------------------------------------------------------------------------|
| tabs                | Array of { id, title, content }             | An array of objects representing the tabs, each with an id, title, and content.                         |
| viewportThreshold   | number                                       | The viewport width below which the component displays as an accordion and above as tabs (default: 400). |
| triggerActivation   | "automated" or "manual" (default: "manual") | Determines if tab selection is done automatically upon focus or manually upon click/keyboard action.     |
| textColor           | string (optional)                            | The color of the text in the tab/accordion header.                                                      |
| tabBackground       | object (optional)                            | An object with two properties: default and selected, specifying the background colors for tabs.         |
| tabPanelTabindex    | boolean (optional)                           | If true, adds a tabIndex attribute to TabPanel component.                                                |

`;