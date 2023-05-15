export default `
The \`TabComponent\` is a UI component that allows users to switch between different sections of content. Each tab is associated with a content section, and selecting a tab brings its content to the forefront, hiding the content of other tabs.

The component has two main parts:

- The tab list, which includes all the tabs. When a user interacts with a tab, either through a mouse click or keyboard controls, it becomes the selected tab.

- The tab panel, which displays the content for the selected tab. The content can be any type of HTML content.

The component supports keyboard navigation between tabs using the Arrow, Home, and End keys, in line with WAI-ARIA recommendations.

The selection behavior (automatic or manual) can be configured via the \`triggerActivation\` prop. In automatic mode, focusing on a tab (either by mouse hover or keyboard navigation) will automatically select it. In manual mode, a tab must be clicked or selected with the Enter or Space key to be activated.

The component uses WAI-ARIA roles, states, and properties to ensure its accessibility.

## Usage

\`\`\`jsx
import React from 'react';
import { TabComponent } from './TabComponent';

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

<TabComponent tabs={tabs} tabPanelTabindex={true} triggerActivation="manual" />
\`\`\`
`;