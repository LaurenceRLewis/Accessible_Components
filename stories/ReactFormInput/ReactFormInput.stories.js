import React from "react";
import ReactFormInput from "./ReactFormInput";
import ReactFormInputDescription from "./ReactFormInputDescription";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
} from '@storybook/blocks';


export default {
  title: "Building Blocks/Text Input",
  component: ReactFormInput,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Subtitle if needed</Subtitle>
          <Description markdown={ReactFormInputDescription} />
          <Primary />
          <ArgTypes story="Disclosure (HTML Details-Summary)" />
        </>
      ),
    },
  },
  argTypes: {
    labelName: {
      name: "Input label",
      control: {
        type: "text",
      },
      defaultValue: "Input Name",
      description: "The label for the input field.",
    },
    autoComplete: {
      name: "Change input type",
      control: {
        type: "select",
      },
      options: {
        "": "",
        off: "off",
        on: "on",
        name: "name",
        "honorific-prefix": "honorific-prefix",
        "honorific-suffix": "honorific-suffix",
        "given-name": "given-name",
        "additional-name": "additional-name",
        "family-name": "family-name",
        nickname: "nickname",
        email: "email",
        username: "username",
        "new-password": "new-password",
        "current-password": "current-password",
        "one-time-code": "one-time-code",
        "organization-title": "organization-title",
        organization: "organization",
        "street-address": "street-address",
        country: "country",
        "country-name": "country-name",
        "postal-code": "postal-code",
        "cc-name": "cc-name",
        "cc-given-name": "cc-given-name",
        "cc-additional-name": "cc-additional-name",
        "cc-family-name": "cc-family-name",
        "cc-number": "cc-number",
        "cc-exp": "cc-exp",
        "cc-exp-month": "cc-exp-month",
        "cc-exp-year": "cc-exp-year",
        "cc-csc": "cc-csc",
        "cc-type": "cc-type",
        bday: "bday",
        "bday-month": "bday-month",
        "bday-year": "bday-year",
        tel: "tel",
        "tel-country-code": "tel-country-code",
        "tel-national": "tel-national",
        "tel-area-code": "tel-area-code",
        "tel-local": "tel-local",
      },
      defaultValue: "",
      description: "The list of HTML autocomplete attribute values.",
    },
    inputType: {
      name: "Input type",
      control: {
        type: "select",
      },
      options: {
        Text: "text",
        Button: "button",
        Checkbox: "checkbox",
        Color: "color",
        Date: "date",
        Email: "email",
        File: "file",
        Hidden: "hidden",
        Image: "image",
        Month: "month",
        Number: "number",
        Password: "password",
        Radio: "radio",
        Range: "range",
        Reset: "reset",
        Search: "search",
        Submit: "submit",
        Tel: "tel",
        Time: "time",
        Url: "url",
        Week: "week",
      },
      defaultValue: "text",
      description: "The type of the input field.",
    },
    helpText: {
      name: "Help text",
      control: {
        type: "text",
      },
      defaultValue: "",
      description:
        "Help text to assist in understanding the requirements for the input",
    },
  },
};

const Template = (args) => <ReactFormInput {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  labelName: "Input Label",
  autoComplete: "",
  inputType: "text",
  helpText: "",
};

// Standalone documentation page
export const Documentation = () => <ReactFormInputDescription />;
Documentation.parameters = {
  docsOnly: true,
};

// Rename the sidebar label for this story
TextInput.storyName = "Text Input Build";