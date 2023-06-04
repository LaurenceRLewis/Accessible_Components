import React from 'react';
import ReactDetailsDisclosure from './ReactDetailsDisclosure';
import ReactDetailsDisclosureDescription from './ReactDetailsDisclosureDescription';

export default {
  title: 'Native HTML Components/React Disclosure (HTML Details-Summary)',
  component: ReactDetailsDisclosure,
  parameters: {
    docs: {
      description: {
        component: ReactDetailsDisclosureDescription,
      },
    },
    docsOnly: true,
  },
};

const Template = (args) => <ReactDetailsDisclosure {...args} />;

export const DetailsDisclosure = Template.bind({});
DetailsDisclosure.storyName = "Details Disclosure";
DetailsDisclosure.args = {
  isOpen: false,
};