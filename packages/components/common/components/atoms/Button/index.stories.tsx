import React from "react";
import { Story, Meta } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Button, IButtonProps } from ".";
import user from "../../../assets/user.svg";

// ES6 module export
// import { storiesOf } from "@storybook/react";
// storiesOf("Button", module).add("with text", () => {
//   return <Button title="Click Me" content="asdsa" />;
// });

// CSF below
export default {
  title: "Atoms/Button",
  decorators: [withKnobs],
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: true,
  label: "FOLLOW",
  borderRadius: "-none",
  labelStyles: "text-lg text-center",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  primary: true,
  label: "Create Post",
  borderRadius: "-none",
  labelStyles: "text-lg text-center",
  icon: `${user}`,
  iconAlt: "User",
  iconStyles: "w-6 mr-2",
};

export const FilterActivitySelected = Template.bind({});
FilterActivitySelected.args = {
  label: "DRILLS",
  borderRadius: "-none",
  backgroundColor: "bg-white",
  borderStyles: "border border-blue-500 border-opacity-100 border-b-4",
  labelStyles: "text-blue-600 text-xs text-center",
};

export const FilterActivityIdle = Template.bind({});
FilterActivityIdle.args = {
  label: "PAPER DRILLS",
  borderRadius: "-none",
  backgroundColor: "bg-white",
  borderStyles: "border-2 border-blue-200 border-opacity-100 ",
  labelStyles: "text-blue-200 text-xs text-center",
};

export const GameTypeSelected = Template.bind({});
GameTypeSelected.args = {
  label: "ALL",
  borderRadius: "-none",
  backgroundColor: "bg-white",
  borderStyles: "border-4 rounded-md  border-blue-500 border-opacity-100 ",
  labelStyles: "text-blue-500 text-sm text-center",
};

export const GameTypeIdle = Template.bind({});
GameTypeIdle.args = {
  label: "FREE",
  borderRadius: "-none",
  backgroundColor: "bg-white",
  borderStyles: " border-2 rounded-md  border-blue-200 border-opacity-100",
  labelStyles: "text-blue-200 text-sm text-center",
};

export const HonorBoardSelected = Template.bind({});
HonorBoardSelected.args = {
  label: "All Time",
  borderRadius: "-none",
  backgroundColor: "bg-blue-500",
  borderStyles:
    "border-2  border-2 rounded-md  border-blue-500  border-opacity-100 ",
  labelStyles: "text-white text-sm text-center",
};
export const HonorBoardIdle = Template.bind({});
HonorBoardIdle.args = {
  label: "This Month",
  borderRadius: "-none",
  backgroundColor: "bg-white",
  borderStyles: "border-4 rounded-md  border-blue-500 border-opacity-100 ",
  labelStyles: "text-blue-500 text-sm text-center",
};
