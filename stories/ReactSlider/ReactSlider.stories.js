//ReactSlider.stories.css
import React from 'react';
import HtmlSlider from './HtmlSlider';
import AriaSlider from './AriaSlider';
import ReactSliderDescription from './ReactSliderDescription';

export default {
  title: 'Components/React Slider',
  component: HtmlSlider,
  parameters: {
    docs: {
      description: {
        component: ReactSliderDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
    SliderModel: {
      control: { type: "select" },
      options: ["HTML", "ARIA"],
      defaultValue: 'HTML',
      description: 'Choose the technology type for the slider: HTML or ARIA',
    },
    min: {
      control: 'number',
      defaultValue: 0,
      description: 'The minimum allowed value for the slider',
    },
    max: {
      control: 'number',
      defaultValue: 10,
      description: 'The maximum allowed value for the slider',
    },
    step: {
      control: 'number',
      defaultValue: 1,
      description: 'The increment value for each step of the slider',
    },
    now: {
      control: 'number',
      defaultValue: 5,
      description: 'The current value of the slider',
    },
    useAriaValueText: {
      control: 'boolean',
      description: 'Should the slider use the custom aria-valuetext',
    },
    ariaValueText: {
      control: 'text',
      description: 'The custom aria-valuetext for the slider',
    },
  },  
};

const Template = (args) => {
  return args.SliderModel === 'ARIA' 
  ? <AriaSlider min={0} max={10} step={1} {...args} /> 
  : <HtmlSlider min={0} max={10} step={1} value={0} {...args} />
};

export const Default = Template.bind({});