import React from "react";
import ReactRadioButtonGroup from "./ReactRadioButtonGroup";
import ReactRadioButtonGroupDescription from "./ReactRadioButtonGroupDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

// Defines the count of radio buttons that will be displayed in the Storybook UI
const numberOfRadioButtons = 4;

// argTypes defines the control type and other properties for each prop that is editable in Storybook UI
const argTypes = {
  // groupName is the name of the radio button group. It populates the legend in the UI.
  groupName: {
    control: { type: "text" },
    defaultValue: "Group Name",
    description:
      "The group name of the radio buttons that populates the Legend",
  },
  // labels is disabled in the Storybook UI since it is auto-generated based on the number of radio buttons.
  labels: {
    table: {
      disable: true,
    },
  },
};

// Default props to be used for rendering the radio button group in the Storybook
const args = {
  groupName: "Group Name",
};

// Loop to dynamically add labels for each radio button in the group based on the specified count
for (let i = 0; i < numberOfRadioButtons; i++) {
  const key = `Radio button label ${i + 1}`;
  argTypes[key] = {
    control: { type: "text" },
    defaultValue: i < 2 ? `Label ${i + 1}` : "",
  };
  args[key] = i < 2 ? `Label ${i + 1}` : "";
}

// Default export for Storybook. It includes metadata for the Storybook to know how to handle and present the component.
export default {
  title: "Building Blocks/Radio Button Group",
  component: ReactRadioButtonGroup,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactRadioButtonGroupDescription} />
          <Primary />
          <ArgTypes story="Radio Button Group" />
        </>
      ),
    },
  },
  argTypes,
};

// Template function to create a new instance of the RadioButtonGroup with the props from args.
const Template = (args) => {
  // Creates an array of labels based on the number of radio buttons.
  const labelTexts = Array.from(
    { length: numberOfRadioButtons },
    (_, i) => args[`Radio button label ${i + 1}`],
  );
  // Makes a copy of the args object. This includes all properties, including those used for the labelTexts.
  const { ...restArgs } = args;
  // Filters out any undefined or empty labels.
  const filteredLabelTexts = labelTexts.filter((label) => label);
  // Returns a new instance of the ReactRadioButtonGroup with the filtered labels and other args.
  return <ReactRadioButtonGroup labels={filteredLabelTexts} {...restArgs} />;
};

// Story that provides a use case for the RadioButtonGroup.
export const RadioButtonGroup = Template.bind({});
// Sets initial arguments for this story, derived from the args object we constructed.
RadioButtonGroup.args = args;

// Standalone documentation page
export const Documentation = () => <ReactRadioButtonGroupDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
RadioButtonGroup.storyName = "Radio Button Group Build";