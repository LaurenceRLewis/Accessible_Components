import React from 'react';
import ReactTableSubheaderControl from './ReactTableSubheaderControl';
import ReactTableSubHeader from './ReactTableSubHeader';

const colorMap = {
  'Purple template': 'rgba(128, 0, 128, 1)',
  'Blue template': 'rgba(0, 0, 255, 1)',
  'Green template': 'rgba(0, 128, 0, 1)',
  'Orange template': 'rgba(255, 165, 0, 1)',
};

const lighterColorMap = {
  'Purple template': 'rgba(221, 187, 221, 1)',
  'Blue template': 'rgba(196, 210, 255, 1)',
  'Green template': 'rgba(204, 255, 204, 1)',
  'Orange template': 'rgba(255, 228, 196, 1)',
};

export default {
  title: 'Tables/ReactTableSubHeader',
  component: ReactTableSubheaderControl,
  argTypes: {
    headerTextColor: {
      control: { type: 'select' },
      options: Object.keys(colorMap),
      defaultValue: ReactTableSubHeader.defaultProps.headerTextColor,
      description: 'Select header text color',
    },
    tdFontWeight: {
      control: { type: 'inline-radio' },
      options: [400, 700],
      defaultValue: 400,
      description: 'Select table data font weight',
    },
    thFontWeight: {
      control: { type: 'inline-radio' },
      options: [400, 700],
      defaultValue: 700,
      description: 'Select table header font weight',
    },
  },
  headerBackgroundColor: {
    table: { disable: true },
  },
  tabs: {
    table: { disable: true },
  },
};

const Template = (args) => {
  const { headerTextColor } = args;
  args.headerTextColor = colorMap[headerTextColor] || headerTextColor;
  args.headerBackgroundColor = lighterColorMap[headerTextColor] || args.headerBackgroundColor;
  return <ReactTableSubheaderControl {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  headerTextColor: ReactTableSubHeader.defaultProps.headerTextColor,
  //headerBackgroundColor: ReactTableSubHeader.defaultProps.headerBackgroundColor,
  tdFontWeight: 400,
  thFontWeight: 700,
};