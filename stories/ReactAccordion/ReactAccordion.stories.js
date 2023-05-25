import React from "react";
import { Meta, Description } from "@storybook/addon-docs/blocks";
import Accordion from "./ReactAccordion";
import ReactAccordionDescription from "./ReactAccordionDescription.mdx";

export default {
  title: "Components/React Accordion",
  component: Accordion,
  parameters: {
    docs: {
      page: ReactAccordionDescription,
    },
  },
  argTypes: {
    multiExpand: {
      control: "boolean",
      description: "Allow multiple accordions to be open at once",
      defaultValue: false,
    },
    chevronPosition: {
      control: {
        type: "radio",
        options: ["left", "right"],
      },
      defaultValue: "right",
      description: "Position of the chevron",
    },
    items: {
      table: { disable: true },
    },
    NamedRegionContainer: {
      control: {
        type: "select",
        options: [
          "Contained in a named landmark region",
          "Not contained in a named landmark region",
        ],
      },
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
      <Accordion {...args} />
    </div>
  );
};

export const Cats = Template.bind({});

Cats.args = {
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
  multiExpand: false,
  chevronPosition: "right",
  NamedRegionContainer: "Contained in a named landmark region",
};