import React from 'react';
import ReactRadioButtonGroup from './ReactRadioButtonGroup';
import ReactRadioButtonGroupDescription from './ReactRadioButtonGroupDescription';

// This must match the number of labels set in the RadioButtonGroup array
const numberOfRadioButtons = 2;

const argTypes = {
  groupName: {
    control: { type: 'text' },
    defaultValue: 'Group Name',
    description: "The group name of the radio buttons that populates the Legend",
  },
  labels: {
    table: {
      disable: true, // Disable the labels control
    },
  },
};

const args = {
  groupName: 'Group Name',
};

for (let i = 0; i < numberOfRadioButtons; i++) {
  const key = `labelText${i + 1}`;
  argTypes[key] = {
    control: { type: 'text' },
    defaultValue: i < 2 ? `Label ${i + 1}` : '',
  };
  args[key] = i < 2 ? `Label ${i + 1}` : '';
}

export default {
  title: 'Building Blocks/Radio Button Group',
  component: ReactRadioButtonGroup,
  parameters: {
    docs: {
      description: {
        component: ReactRadioButtonGroupDescription,
      },
    },
    docsOnly: true,
  },
  argTypes,
};

const Template = (args) => {
  const labelTexts = Array.from({ length: numberOfRadioButtons }, (_, i) => args[`labelText${i + 1}`]);
  const { labelText1, labelText2, ...restArgs } = args;
  const filteredLabelTexts = labelTexts.filter(label => label); // Filters out undefined and empty labels
  return <ReactRadioButtonGroup labels={filteredLabelTexts} {...restArgs} />;
};

// Define the RadioButtonGroup
// Make sure to update the number of radio buttons and their labels according to your need
export const RadioButtonGroup = Template.bind({});
RadioButtonGroup.args = args;

// Add labelText3, labelText4, etc. to the RadioButtonGroup.args above if you need more radio buttons by default
// And remember to update the numberOfRadioButtons value.