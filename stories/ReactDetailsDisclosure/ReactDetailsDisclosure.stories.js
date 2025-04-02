import React from "react";
import ReactDetailsDisclosure from "./ReactDetailsDisclosure";
import ReactDetailsDisclosureDescription from "./ReactDetailsDisclosureDescription";

export default {
  title: "Native HTML Components/Disclosure (HTML Details-Summary)",
  component: ReactDetailsDisclosure,
  parameters: {
    docs: {
      description: {
        component: ReactDetailsDisclosureDescription,
      },
    },
    docsOnly: true,
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
