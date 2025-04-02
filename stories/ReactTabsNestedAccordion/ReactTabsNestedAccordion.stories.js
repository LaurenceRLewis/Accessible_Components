import React from "react";
import { ReactTabsNestedAccordion } from "./ReactTabsNestedAccordion";
import ReactTabsNestedAccordionDescription from "./ReactTabsNestedAccordionDescription";
import styles from "./ReactTabsNestedAccordion.module.css";
import AccordionBuild from "../ReactAccordion/ReactAccordion";
import scottyImage from "./images/Scotty.jpg";
import louieImage from "./images/Louie.jpg";
import murphyImage from "./images/Murphy.jpg";
import phoebeImage from "./images/Phoebe.jpg";

export default {
  title: "Combined Components/Tabs (with a nested accordion)",
  component: ReactTabsNestedAccordion,
  parameters: {
    docs: {
      description: {
        component: ReactTabsNestedAccordionDescription,
      },
    },
    docsOnly: true,
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
  <ReactTabsNestedAccordion viewportThreshold={viewportThreshold} {...args} />
);

export const nestedTabs = Template.bind({});
nestedTabs.args = {
  tabs: [
    {
      id: "nested-009878",
      title: "Our cats",
      content: (
        <>
          <h3>Louie, Murphy, Scotty and Phoebe</h3>
          <AccordionBuild
            items={[
              {
                title: "Louie",
                content: (
                  <>
                    <h3>About Louie</h3>
                    <img
                      className={styles.catImage}
                      src={louieImage}
                      alt="Picture of Louie"
                    />
                  </>
                ),
              },
              {
                title: "Murphy",
                content: (
                  <>
                    <h3>About Murphy</h3>
                    <img
                      className={styles.catImage}
                      src={murphyImage}
                      alt="Picture of Murphy"
                    />
                  </>
                ),
              },
              {
                title: "Scotty",
                content: (
                  <>
                    <h3>About Scotty</h3>
                    <img
                      className={styles.catImage}
                      src={scottyImage}
                      alt="Picture of Scotty"
                    />
                  </>
                ),
              },
              {
                title: "Phoebe",
                content: (
                  <>
                    <h3>About Phoebe</h3>
                    <img
                      className={styles.catImage}
                      src={phoebeImage}
                      alt="Picture of Phoebe"
                    />
                  </>
                ),
              },
            ]}
            groupName="ourcats"
            multiExpand="Single"
            chevronPosition="right"
          />
        </>
      ),
    },
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
  ],
  tabPanelTabindex: true,
  triggerActivation: "manual",
  textColor: "rgba(0, 0, 0, 1)",
  tabBackground: "rgba(209, 203, 219, 1)",
  selectedTabBackground: "rgba(156, 39, 176, 1)",
};
