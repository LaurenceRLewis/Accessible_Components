import React from "react";
import AriaSlider from "./AriaSlider";
import ReactAriaSliderDescription from "./ReactAriaSliderDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Components/Slider (ARIA)",
  component: AriaSlider,
  parameters: {
        docs: {
          page: () => (
            <>
              <Title />
              <Subtitle>Subtitle if needed</Subtitle>
              <Description markdown={ReactAccordionDescription} />
              <Primary />
              <ArgsTable story="ARIA Slider" />
            </>
          ),
        },
      },
  argTypes: {
    min: {
      control: "number",
      defaultValue: 0,
      description: "The minimum allowed value for the slider",
    },
    max: {
      control: "number",
      defaultValue: 50,
      description: "The maximum allowed value for the slider",
    },
    step: {
      control: "number",
      defaultValue: 1,
      description: "The increment value for each step of the slider",
    },
    now: {
      control: "number",
      defaultValue: 5,
      description: "The current value of the slider",
    },
    updateAriaValueText: {
      name: "Insert the aria-valuetext attribute",
      control: "boolean",
      description: "Sets value to current number of total number",
    },
    ariaValueText: {
      name: "Set the text for aria-valuetext",
      control: "text",
      description: "The custom aria-valuetext for the slider",
    },
  },
};

const Template = (args) => <AriaSlider {...args} />;

export const Slider = Template.bind({});
Slider.args = {
  min: 0,
  max: 50,
  step: 1,
  now: 5,
  updateAriaValueText: "false",
  ariaValueText: "",
};

// Standalone documentation page
export const Documentation = () => <ReactAriaSliderDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
Slider.storyName = "Slider Build";