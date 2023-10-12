import React from 'react';
import ReactInputPassword from './ReactInputPassword';
import ReactInputPasswordDescription from './ReactInputPasswordDescription';

export default {
  title: "Building Blocks/React Password Input",
  component: ReactInputPasswordDescription,
  parameters: {
    docs: {
      description: {
        component: ReactInputPasswordDescription,
      },
    },
  },
  argTypes: {
    // maskingMethod: {
    //   name: 'Masking Method',
    //   control: "select",
    //   options: [
    //     'password mask', 
    //     'css mask'
    //   ],
    //   defaultValue: 'password mask',
    // },
    includeAriaPressed: {
      name: 'Include aria-pressed',
      control: "boolean",
      defaultValue: true,
    },
  },
};

const Template = (args) => <ReactInputPassword {...args} />;

export const PasswordComponent = Template.bind({});

PasswordComponent.args = {
  //maskingMethod: 'password mask',
  includeAriaPressed: true,
};