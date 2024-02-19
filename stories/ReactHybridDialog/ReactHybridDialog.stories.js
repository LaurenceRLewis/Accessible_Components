import React from 'react';
import ReactHybridDialog from './ReactHybridDialog';
import './ReactHybridDialog.module.css';

// This is the default export that tells Storybook about the component and its meta data
export default {
  title: 'Components/ReactHybridDialog',
  component: ReactHybridDialog,
  // Add any Storybook argTypes if needed for controlling props
};

// Template for creating default ReactHybridDialog story
const Template = (args) => <ReactHybridDialog {...args} />;

// Default story
export const Default = Template.bind({});
// Add any props to Default if needed
Default.args = {
  // Props to pass to the ReactHybridDialog for the Default story
  // Example: prop: value
};