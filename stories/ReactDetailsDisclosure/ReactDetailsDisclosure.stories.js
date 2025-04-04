import React from "react";
import ReactDetailsDisclosure from "./ReactDetailsDisclosure";
import ReactDetailsDisclosureDescription from "./ReactDetailsDisclosureDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

export default {
  title: "Native HTML Components/Disclosure (HTML Details-Summary)",
  component: ReactDetailsDisclosure,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactDetailsDisclosureDescription} />
          <Primary />
          <ArgTypes story="Disclosure (HTML Details-Summary)" />
        </>
      ),
    },
  },
  argTypes: {
    isOpen: {
      name: "Expanded or collapsed",
      control: "radio",
      options: ["Collapsed", "Expanded"],
      defaultValue: "Collapsed",
      description:
        "Controls whether the Details Disclosure is Expanded or collapsed when the page loads.",
    },
  },
};

const Template = (args) => {
  const isOpen = args.isOpen === "Expanded" ? true : false;
  return <ReactDetailsDisclosure isOpen={isOpen} />;
};

export const DetailsDisclosure = Template.bind({});
DetailsDisclosure.storyName = "Details Disclosure";
DetailsDisclosure.args = {
  isOpen: "Collapsed",
};

// Standalone documentation page
export const Documentation = () => <ReactDetailsDisclosureDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
DetailsDisclosure.storyName = "Disclosure (HTML Details-Summary) Build";