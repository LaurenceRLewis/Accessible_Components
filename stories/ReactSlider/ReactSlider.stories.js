//ReactSlider.stories.css
import React from 'react';
import HtmlSlider from './HtmlSlider';
import AriaSlider from './AriaSlider';

export default {
  title: 'Work in progress/Slider',
  component: HtmlSlider,
  argTypes: {
    isAriaSlider: {
      control: { type: "select" },
      options: ["HTML", "ARIA"],
      defaultValue: 'HTML',
      description: 'Choose the technology type for the slider: HTML or ARIA',
    },
    tabs: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  return args.isAriaSlider === 'ARIA' 
  ? <AriaSlider min={0} max={10} step={1} {...args} /> 
  : <HtmlSlider min={0} max={10} step={1} {...args} />;
};

export const Default = Template.bind({});