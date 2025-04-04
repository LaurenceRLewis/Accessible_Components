import React from "react";
import ReactCheckboxGroup from "./ReactCheckboxGroup";
import ReactCheckboxGroupDescription from "./ReactCheckboxGroupDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

// Defines the count of checkboxes that will be displayed in the Storybook UI
const numberOfCheckboxes = 4;

// argTypes defines the control type and other properties for each prop that is editable in Storybook UI
const argTypes = {
  // groupName is the name of the checkbox group. It populates the legend in the UI.
  groupName: {
    name: "Set the radio group common label",
    control: { type: "text" },
    defaultValue: "Group Name",
    description: "The group name of the checkboxes that populates the Legend",
  },
  // labels is disabled in the Storybook UI since it is auto-generated based on the number of checkboxes.
  labels: {
    table: {
      disable: true,
    },
  },
};

// Default props to be used for rendering the checkbox group in the Storybook
const args = {
  groupName: "Checkboxes group Name",
};

// Loop to dynamically add labels for each checkbox in the group based on the specified count
for (let i = 0; i < numberOfCheckboxes; i++) {
  const key = `Checkbox label ${i + 1}`;
  argTypes[key] = {
    control: { type: "text" },
    defaultValue: i < 2 ? `Label ${i + 1}` : "",
  };
  args[key] = i < 2 ? `Label ${i + 1}` : "";
}

// Default export for Storybook. It includes metadata for the Storybook to know how to handle and present the component.
export default {
  title: "Building Blocks/Checkbox Group",
  component: ReactCheckboxGroup,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactCheckboxGroupDescription} />
          <Primary />
          <ArgTypes story="ARIA Slider" />
        </>
      ),
    },
  },
  argTypes,
};

// Template function to create a new instance of the CheckboxGroup with the props from args.
const Template = (args) => {
  // Creates an array of labels based on the number of checkboxes.
  const labelTexts = Array.from(
    { length: numberOfCheckboxes },
    (_, i) => args[`Checkbox label ${i + 1}`],
  );
  // Makes a copy of the args object. This includes all properties, including those used for the labelTexts.
  const { ...restArgs } = args;
  // Filters out any undefined or empty labels.
  const filteredLabelTexts = labelTexts.filter((label) => label);
  // Returns a new instance of the ReactCheckboxGroup with the filtered labels and other args.
  return <ReactCheckboxGroup labels={filteredLabelTexts} {...restArgs} />;
};

// Story that provides a use case for the CheckboxGroup.
// Be sure to update the number of checkboxes and their labels as required.
export const CheckboxGroup = Template.bind({});
// Sets initial arguments for this story, derived from the args object we constructed.
CheckboxGroup.args = args;

// Standalone documentation page
export const Documentation = () => <ReactCheckboxGroupDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
CheckboxGroup.storyName = "Checkbox Group Build";