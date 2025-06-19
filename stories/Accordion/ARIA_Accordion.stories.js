import React from "react";
import AccordionBuild from "./ARIA_Accordion";
import ARIA_AccordionDescription from "./ARIA_AccordionDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
} from '@storybook/blocks';

export default {
  title: "Components/Accordion",
  component: AccordionBuild,
  parameters: {
      docs: {
        page: () => (
          <>
            <Title />
            <Subtitle>Subtitle if needed</Subtitle>
            <Description markdown={ARIA_AccordionDescription} />
            <Primary />
            <ArgsTable story="Accordion" />
          </>
        ),
      },
    },
  argTypes: {
    multiExpand: {
      name: "Open single or multiple sections",
      control: "radio",
      options: ["Single", "Multiple"],
      defaultValue: "Single",
      description: "Allow multiple accordions to be open at once",
    },
    chevronPosition: {
      name: "Icon position",
      control: "radio",
      options: ["left", "right"],
      defaultValue: "right",
      description: "Position of the chevron",
    },
    items: {
      table: { disable: true },
    },
    NamedRegionContainer: {
      name: "Option to wrap accordion in a named region",
      control: { type: "select" },
      options: [
        "Contained in a named landmark region",
        "Not contained in a named landmark region",
      ],
      defaultValue: "Contained in a named landmark region",
    },
    groupName: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  const isNamedRegion =
    args.NamedRegionContainer === "Contained in a named landmark region";

  return (
    <div
      {...(isNamedRegion
        ? {
            role: "region",
            "aria-label": `Accordion group for ${args.groupName}`,
          }
        : {})}
    >
      <h2 id={`${args.groupName}-heading`}>
        {args.groupName.charAt(0).toUpperCase() + args.groupName.slice(1)}
      </h2>
      <AccordionBuild {...args} />
    </div>
  );
};

export const Accordion = Template.bind({});

Accordion.args = {
  items: [
    {
      title: "Persian",
      content:
        "Persian cats are known for their long, luxurious fur and flat faces.",
    },
    {
      title: "Siamese",
      content:
        "Siamese cats have sleek, short coats and striking blue almond-shaped eyes.",
    },
    {
      title: "Maine Coon",
      content:
        "Maine Coon cats are large, friendly cats with tufted ears and bushy tails.",
    },
    {
      title: "Bengal",
      content:
        "Bengal cats are known for their wild appearance and energetic nature.",
    },
  ],
  groupName: "cats",
  multiExpand: "Single",
  chevronPosition: "right",
  NamedRegionContainer: "Contained in a named landmark region",
};

// Standalone documentation page
export const Documentation = () => <ARIA_AccordionDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
Accordion.storyName = "Accordion Build";