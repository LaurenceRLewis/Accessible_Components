export default `
The \`AccordionTabComponent\` is a responsive UI component which displays as an accordion in smaller viewports and as tabs in larger viewports. This adaptive behavior is controlled by the \`viewportThreshold\` prop.

Each tab/accordion item has two main parts:

- The header (either a Tab or AccordionButton), which displays the title. Interacting with the header (mouse click or keyboard controls) will change the selected tab.

- The content (either a TabPanel or AccordionPanel), which is shown when its corresponding header is selected.

In the tab view, the component supports keyboard navigation between tabs using the Arrow, Home, and End keys, in line with WAI-ARIA recommendations. 

The component's selection behavior (automatic or manual) can be configured via the \`triggerActivation\` prop. In automatic mode, focusing on a tab (either by mouse hover or keyboard navigation) will automatically select it. In manual mode, a tab must be clicked or selected with the Enter or Space key to be activated.

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
`;