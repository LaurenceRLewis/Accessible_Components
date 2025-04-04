import React from "react";
import ReactInputPassword from "./ReactInputPassword";
import ReactInputPasswordDescription from "./ReactInputPasswordDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

export default {
  title: "Building Blocks/React Password Input",
  component: ReactInputPasswordDescription,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactInputPasswordDescription} />
          <Primary />
          <ArgTypes story="Password Input" />
        </>
      ),
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
      name: "Include aria-pressed",
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

// Standalone documentation page
export const Documentation = () => <ReactInputPasswordDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
PasswordComponent.storyName = "Password Input Build";