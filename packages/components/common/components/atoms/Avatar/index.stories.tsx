import React from "react";
import { Story, Meta } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Avatar, IAvatarProps } from ".";
import {avatar_3} from "../../../assets/avatar";

// ES6 module export
// import { storiesOf } from "@storybook/react";
// storiesOf("Avatar", module).add("with text", () => {
//   return <Avatar title="Click Me" content="asdsa" />;
// });

// CSF below
export default {
  title: "Atoms/Avatar",
  decorators: [withKnobs],
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IAvatarProps> = (args) => <Avatar {...args} />;

export const withImage = Template.bind({});
withImage.args = {
  size: 'small',
  src: `${avatar_3}`
};

export const withInitials = Template.bind({});
withInitials.args = {
  size: 'small',
  abbreviation: "AB",
  loading: true
};

export const userOnline = Template.bind({});
userOnline.args = {
  src: `${avatar_3}`,
  isRounded: true,
  isOnline: true
};
