import React from "react";
import Accordion from "./ReactAccordion";

export default {
  title: "Components/ReactAccordion",
  component: Accordion,
  argTypes: {
    multiExpand: {
      control: "boolean",
      description: "Allow multiple accordions to be open at once",
      defaultValue: false,
    },
    items: {
      table: { disable: true },
    },
  },
};

const Template = (args) => (
  <div
    role="region"
    aria-label={`Accordion group for ${args.groupName}`}
  >
    <h2 id={`${args.groupName}-heading`}>
      {args.groupName.charAt(0).toUpperCase() + args.groupName.slice(1)}
    </h2>
    <Accordion {...args} />
  </div>
);

export const Cats = Template.bind({});
export const Dogs = Template.bind({});
export const Horses = Template.bind({});

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
};

Dogs.args = {
  items: [
    {
      title: "Golden Retriever",
      content: "Golden Retrievers are friendly, intelligent, and devoted.",
    },
    {
      title: "Labrador Retriever",
      content: "Labrador Retrievers are friendly, active, and outgoing.",
    },
    {
      title: "German Shepherd",
      content: "German Shepherds are confident, courageous, and smart.",
    },
    {
      title: "Bulldog",
      content: "Bulldogs are friendly, courageous, and calm.",
    },
  ],
  groupName: "dogs",
  multiExpand: false,
};

Horses.args = {
  items: [
    {
      title: "Arabian",
      content:
        "Arabian horses are known for their elegance, intelligence, and spirited nature.",
    },
    {
      title: "Thoroughbred",
      content:
        "Thoroughbreds are athletic, fast, and primarily used for racing and jumping competitions.",
    },
    {
      title: "Appaloosa",
      content:
        "Appaloosas are recognized by their unique spotted coat patterns and are versatile in various disciplines.",
    },
    {
      title: "Clydesdale",
      content:
        "Clydesdales are large, strong horses known for their feathered legs and gentle temperament.",
    },
  ],
  groupName: "horses",
  multiExpand: true,
};
