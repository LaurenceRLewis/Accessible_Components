import React from "react";
import { ReactTabs } from "./ReactTabs";
import ReactTabsDescription from "./ReactTabsDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

export default {
  title: "Components/Tabs (Segmented Controls)",
  component: ReactTabs,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactTabsDescription} />
          <Primary />
          <ArgTypes story="Tabs (Segmented Controls)" />
        </>
      ),
    },
  },
  argTypes: {
    tabPanelTabindex: {
      name: "Add tabindex 0 to Tabpanel",
      control: { type: "boolean" },
    },
    textColor: {
      name: "Text colour",
      table: { disable: true },
    },
    tabBackground: {
      name: "Table background colour",
      table: { disable: true },
    },
    selectedTabBackground: {
      name: "Selected table background colour",
      table: { disable: true },
    },
    triggerActivation: {
      name: "Manual or automated activation",
      control: { type: "select" },
      options: { automated: "automated", manual: "manual" },
      defaultValue: "manual",
    },
    viewportThreshold: {
      name: "Change the viewport width to simulate smaller screens",
      control: { type: "number" },
      defaultValue: 400,
    },
    tabs: {
      table: { disable: true },
    },
  },
};

const Template = ({ viewportThreshold, ...args }) => (
  <ReactTabs viewportThreshold={viewportThreshold} {...args} />
);

export const ResponsiveTabs = Template.bind({});
ResponsiveTabs.args = {
  tabs: [
    {
      id: "html-009878",
      title: "HTML",
      content: (
        <>
          <h3>About HTML & Accessibility</h3>
          <p>
            Using HTML in web development is vital because it allows for the
            creation of structured, semantic content that is not only
            human-readable but also machine-readable. By using appropriate HTML
            tags and elements, developers can convey the meaning and importance
            of content, making it easier for search engines to understand and
            index the information on webpages. Properly structured HTML also
            benefits accessibility by providing better support for screen
            readers and other assistive technologies, enabling users with
            disabilities to access and interact with web content more
            effectively.
          </p>
        </>
      ),
    },
    {
      id: "aria-009878",
      title: "ARIA",
      content: (
        <>
          <h3>About ARIA & Accessibility</h3>
          <p>
            ARIA, which stands for Accessible Rich Internet Applications, is a
            set of attributes designed to enhance the accessibility of web
            content and applications. By providing additional information about
            the structure and functionality of elements on a webpage, ARIA helps
            screen readers and other assistive technologies interpret the
            content more effectively. The primary goal of ARIA is to bridge the
            gap between the capabilities of modern web technologies and the
            requirements of users with disabilities, ensuring that everyone can
            access and interact with web content.
          </p>
        </>
      ),
    },
    {
      id: "react-009878",
      title: "REACT",
      content: (
        <>
          <h3>About REACT & Accessibility</h3>
          <p>
            Using React and HTML together to build components has several
            advantages. First, it simplifies the development process by
            providing a clear separation of concerns, as each component is
            responsible for its own logic, state, and presentation. This
            modularity makes it easier to maintain, test, and refactor the
            codebase. Second, React's component-based architecture promotes
            reusability, which can significantly reduce the amount of code
            duplication and improve the overall maintainability of a project.
            Finally, the combination of React and HTML enables developers to
            create more interactive and engaging user interfaces that can adapt
            to changes in data and state, ultimately enhancing the user
            experience on the web.
          </p>
        </>
      ),
    },
  ],
  tabPanelTabindex: true,
  triggerActivation: "manual",
  textColor: "rgba(0, 0, 0, 1)",
  tabBackground: "rgba(209, 203, 219, 1)",
  selectedTabBackground: "rgba(156, 39, 176, 1)",
};

// Standalone documentation page
export const Documentation = () => <ReactTabsDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
ResponsiveTabs.storyName = "Tabs (Segmented Controls) Build";