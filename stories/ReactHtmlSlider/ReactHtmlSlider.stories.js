//ReactSlider.stories.css
import React from 'react';
import HtmlSlider from './HtmlSlider';
import ReactHtmlSliderDescription from './ReactHtmlSliderDescription';

export default {
  title: 'Native HTML Components/React HTML Slider',
  component: HtmlSlider,
  parameters: {
    docs: {
      description: {
        component: ReactHtmlSliderDescription,
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