import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text, ITextProps } from "./index";

export default {
  title: "Atoms/Texts",
  component: Text,
} as Meta;

const Template: Story<ITextProps> = (args) => <Text {...args} />;

export const BasicText = Template.bind({});
BasicText.args = {
  textLabel: "Basic Text",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  textLabel:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus ex repellendus incidunt, perspiciatis labore eveniet aspernatur? Eveniet officiis maxime repellendus, voluptatum earum, eos maiores, ipsum temporibus in voluptate illum.",
  color: "#353535",
};
