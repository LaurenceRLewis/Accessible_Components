//ReactSlider.stories.css
import React from 'react';
import AriaSlider from './AriaSlider';
import ReactAriaSliderDescription from './ReactAriaSliderDescription';

export default {
  title: 'Components/ARIA Slider',
  component: AriaSlider,
  parameters: {
    docs: {
      description: {
        component: ReactAriaSliderDescription,
      },
    },
    docsOnly: true,
  },
  argTypes: {
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

const Template = (args) => <AriaSlider min={0} max={10} step={1} {...args} />;

export const Slider = Template.bind({});