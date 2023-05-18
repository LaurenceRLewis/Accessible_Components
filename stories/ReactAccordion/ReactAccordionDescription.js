export default `
The \`ReactAccordion\` is a fully accessible component that provides a way to condense content in a structured manner. It allows users to show and hide sections of content.

Each Accordion item consists of two parts: 

- The accordion header, which includes a title and an icon indicating the expansion state. When a user interacts with the header, either through a mouse click or keyboard controls, it toggles the expansion state. 

- The accordion content, which is displayed when the accordion header is expanded. The content can be any type of HTML content.

The Accordion component supports both single and multiple active items. This means you can configure it to either allow multiple content sections to be open at once, or to ensure that only one section is open at a time.

You can customize the icon used in the accordion headers by passing a React component to the \`CustomIcon\` prop. This component will receive an \`active\` prop, which is a boolean representing whether the accordion item is currently expanded. If the \`CustomIcon\` prop is not provided, default Chevron icons will be used.

Adding a named region to the Accordion provides the advantage of organising and categorising the accordion items into distinct groups. By assigning a groupName to the Accordion, you can have multiple Accordions on the same page, each with its own set of items. This can be particularly useful when you have different sections of content that need to be independently expandable and collapsible.

The Accordion uses WAI-ARIA roles, states, and properties to ensure it is accessible to screen readers and other assistive technologies. It supports all the necessary keyboard interactions as recommended by the WAI-ARIA Authoring Practices, such as Arrow, Home, and End keys.

Learn more about the component and its properties at the Aria Practices Guide [Accordion Pattern (Sections With Show/Hide Functionality)](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

## Props and Methods

| Prop name | Type | Description |
| --------- | ---- | ----------- |
| items     | array of objects | Array containing the title and content of each accordion item. |
| groupName | string | Name of the accordion group. This can be used to group multiple accordions on a single page. |
| multiExpand | boolean | If true, multiple accordion items can be expanded at once. If false, only one item can be expanded at a time. |
| CustomIcon | React component | Custom icon component to use in the accordion header. Receives an 'active' prop indicating whether the accordion item is expanded. |

## Usage

\`\`\`jsx
import React from 'react';
import Accordion from './ReactAccordion';

// Define your custom icon component
const MyIcon = ({ active }) => {
  const color = active ? 'red' : 'blue';
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path d="M5 8l5 5 5-5H5z" fill={color} />
    </svg>
  );
};

const items = [
  {
    title: 'Item 1',
    content: 'Content for item 1',
  },
  {
    title: 'Item 2',
    content: 'Content for item 2',
  },
  // More items...
];

// Pass the custom icon component to the Accordion
<Accordion items={items} groupName="group1" multiExpand={true} CustomIcon={MyIcon} />
\`\`\`

## Example

This is an example of how to use the Accordion component with multiple active items and a custom icon:

\`\`\`jsx
import React from 'react';
import Accordion from './ReactAccordion';

const MyIcon = ({ active }) => {
  const color = active ? 'red' : 'blue';
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path d="M5 8l5 5 5-5H5z" fill={color} />
    </svg>
  );
};

const items = [
  {
    title: 'Section 1',
    content: 'This is the content for section 1.',
  },
  {
    title: 'Section 2',
    content: 'This is the content for section 2.',
  },
  // More sections...
];

const App = () => (
  <Accordion items={items} groupName="myGroup" multiExpand={true} CustomIcon={MyIcon} />
);

export default App;
\`\`\`

In the example above, the \`items\` prop is an array of objects, each with a \`title\` and \`content\` property. The \`groupName\` prop sets the name of the accordion group, allowing you to have multiple independent accordions on the same page. The \`multiExpand\` prop is set to \`true\`, meaning multiple sections can be expanded at the same time. Finally, the \`CustomIcon\` prop is used to pass a custom icon component to be used in the accordion headers. The custom icon component receives an \`active\` prop indicating whether the accordion item is expanded.

`;