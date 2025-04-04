//ReactSlider.stories.css
import React from "react";
import HtmlSlider from "./HtmlSlider";
import ReactHtmlSliderDescription from "./ReactHtmlSliderDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Native HTML Components/Slider (HTML)",
  component: HtmlSlider,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactHtmlSliderDescription} />
          <Primary />
          <ArgsTable story="Modal Dialog (HTML)" />
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
      defaultValue: 10,
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
  },
};

const Template = (args) => <HtmlSlider {...args} />;

export const Slider = Template.bind({});

Slider.args = {
  min: 0,
  max: 10,
  step: 1,
  now: 5,
};

// Standalone documentation page
export const Documentation = () => <ReactHtmlSliderDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
Slider.storyName = "Slider (HTML) Build";