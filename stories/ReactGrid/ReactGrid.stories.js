import React from "react";
import ReactGrid from "./ReactGrid";
import ReactGridDescription from "./ReactGridDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';

export default {
  title: "Components/Grid",
  component: ReactGrid,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactGridDescription} />
          <Primary />
          <ArgTypes story="Grid" />
        </>
      ),
    },
  },
};

const Template = (args) => <ReactGrid {...args} />;

export const Grid = Template.bind({});
Grid.args = {
  // Pass default props to your component here if any
};

// Standalone documentation page
export const Documentation = () => <ReactGridDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
Grid.storyName = "Grid Build";