import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { text } from "@storybook/addon-knobs";

import { Card, ICardProps } from "./index";
import { Text } from "../../atoms/Text";
import { Input } from '../../atoms/Input';
import { Avatar } from "../../atoms/Avatar";

const props = () => ({
  label: text("Legend ID (legendId)", "formgroup-legend-id"),
  legendText: text("Legend text (legendText)", "FormGroup Legend"),
});

export default {
  title: "Molecules/Cards",
  component: Card,
} as Meta;

const Template: Story<ICardProps> = (args) => <Card {...args} {...props} />;

export const CardItem = Template.bind({});

CardItem.args = {
  rootClassName: "border border-solid border-gray-400 p-4 rounded shadow-sm",
  children: (
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ad
      dolores, tempora officia minus autem. In cupiditate, ut, ratione, quis
      voluptate voluptates corporis quo enim dolore corrupti itaque omnis
      obcaecati!
    </p>
  ),
};

export const GameCard = Template.bind({});
GameCard.args = {
  children: (
    <div className="bg-gradient-to-r from-blue-500 to-blue-300 rounded shadow border w-64  p-6 flex flex-col flex-wrap content-center  place-items-center">
      <h5 className="text-white text-3xl font-bold justify-items-center">
        PRACTICE
      </h5>
      <p className="text-white text-sm">Improve your market stockIQ</p>
    </div>
  ),
};

export const FeaturedStocksCard = Template.bind({});
FeaturedStocksCard.args = {
  children: (
    <div className="rounded py-4 px-4 m-2 bg-gray-200 max-w-xs  space-y-2 sm:py-4 flex flex-col flex-nowrap w-auto">
      <Avatar
        src={require("../../../assets/ONGC.png")}
        loading={false}
        username="ONGC"
        avatarStyles="mx-auto"
      />
      <Text
        label="ONGC"
        color="black"
        weight={400}
        family="Roboto"
        textStyles="text-center"
      />
      <Text label="1498 (+5%)" color="green" textStyles="text-center" />
    </div>
  ),
};

export const FeaturedStocksCardSet = Template.bind({});
FeaturedStocksCardSet.args = {
  rootClassName: "flex overflow-x-scroll pb-10 hide-scroll-bar",
  children: (
    <>
      <div className="rounded py-4 px-4 m-2 bg-gray-200 max-w-sm  space-y-2 sm:py-4 flex flex-col flex-nowrap">
        <Avatar
          src={require("../../../assets/ONGC.png")}
          loading={false}
          username="ONGC"
          avatarStyles="mx-auto"
        />
        <Text
          label="ONGC"
          color="black"
          weight={400}
          family="Roboto"
          textStyles="text-center"
        />
        <Text
          label="1498 (+5%)"
          color="green"
          textSize="text-xs sm:text-base md:text-sm"
          textStyles="text-center"
        />
      </div>
      <div className="rounded py-4 px-4 m-2 bg-gray-200 max-w-sm  space-y-2 sm:py-4">
        <Avatar
          src={require("../../../assets/ONGC.png")}
          loading={false}
          username="ONGC"
          avatarStyles="mx-auto"
        />
        <Text
          label="ONGC"
          color="black"
          weight={400}
          family="Roboto"
          textStyles="text-center"
        />
        <Text
          label="1498 (+5%)"
          color="green"
          textSize="text-xs sm:text-base md:text-sm"
          textStyles="text-center"
        />
      </div>
      <div className="rounded py-4 px-4 m-2 bg-gray-200 max-w-sm  space-y-2 sm:py-4">
        <Avatar
          src={require("../../../assets/ONGC.png")}
          loading={false}
          username="ONGC"
          avatarStyles="mx-auto"
        />
        <Text
          label="ONGC"
          color="black"
          weight={400}
          family="Roboto"
          textStyles="text-center"
        />
        <Text
          label="1498 (+5%)"
          color="green"
          textSize="text-xs sm:text-base md:text-sm"
          textStyles="text-center"
        />
      </div>
    </>
  ),
};

export const FeaturedPeopleCard = Template.bind({});
FeaturedPeopleCard.args = {
  rootClassName: "flex flex-wrap m-2",
  children: (
    <div className="p-2 bg-gray-200 rounded min-w-max mx-3">
      <div className="flex flex-row">
        <Avatar
          src={require("../../../assets/avatar/avatar_111.png")}
          loading={false}
          username="User Avatar"
          avatarStyles="m-auto w-14 h-14"
        />
        <div className="mx-2">
          <Text label="Arpit Sanghvi" />
          <div className="flex flex-row">
            <Text
              label="Father"
              color="white"
              textSize="text-xs"
              textStyles="px-1 bg-gray-900 mr-2"
            />
            <Text
              label="Product Manager"
              color="white"
              textSize="text-xs"
              textStyles="px-1 bg-gray-800"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-none md:flex-1">
        <Text
          label="46 Follower &#8226;"
          textSize="text-xs"
          textStyles="px-1"
        />
        <Text label="120 Posts &#8226;" textSize="text-xs" textStyles="px-1" />
        <Text label="5L invested" textSize="text-xs" textStyles="px-1" />
      </div>
    </div>
  ),
};

export const FeaturedPeopleCardSet = Template.bind({});
FeaturedPeopleCardSet.args = {
  rootClassName: "flex overflow-x-scroll  hide-scroll-bar",
  children: (
    <>
      <div className="p-2 bg-gray-200 rounded min-w-max mx-3">
        <div className="flex flex-row">
          <Avatar
            src={require("../../../assets/avatar/avatar_111.png")}
            loading={false}
            username="User Avatar"
            avatarStyles="m-auto w-14 h-14"
          />
          <div className="mx-2">
            <Text label="Arpit Sanghvi" />
            <div className="flex flex-row">
              <Text
                label="Father"
                color="white"
                textSize="text-xs"
                textStyles="px-1 bg-gray-900 mr-2"
              />
              <Text
                label="Product Manager"
                color="white"
                textSize="text-xs"
                textStyles="px-1 bg-gray-800"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-none md:flex-1">
          <Text
            label="46 Follower &#8226;"
            textSize="text-xs"
            textStyles="px-1"
          />
          <Text
            label="120 Posts &#8226;"
            textSize="text-xs"
            textStyles="px-1"
          />
          <Text label="5L invested" textSize="text-xs" textStyles="px-1" />
        </div>
      </div>
      <div className="p-2 bg-gray-200 rounded min-w-max mx-3">
        <div className="flex flex-row">
          <Avatar
            src={require("../../../assets/avatar/avatar_111.png")}
            loading={false}
            username="User Avatar"
            avatarStyles="m-auto w-14 h-14"
          />
          <div className="mx-2">
            <Text label="Raj Birani" />
            <div className="flex flex-row">
              <Text
                label="Sibling"
                color="white"
                textSize="text-xs"
                textStyles="px-1 bg-gray-900 mr-2"
              />
              <Text
                label="Community Manager"
                color="white"
                textSize="text-xs"
                textStyles="px-1 bg-gray-800"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-none md:flex-1">
          <Text
            label="06 Follower &#8226;"
            textSize="text-xs"
            textStyles="px-1"
          />
          <Text label="10 Posts &#8226;" textSize="text-xs" textStyles="px-1" />
          <Text label="1L invested" textSize="text-xs" textStyles="px-1" />
        </div>
      </div>
      <div className="p-2 bg-gray-200 rounded min-w-max mx-3">
        <div className="flex flex-row">
          <Avatar
            src={require("../../../assets/avatar/avatar_111.png")}
            loading={false}
            username="User Avatar"
            avatarStyles="m-auto w-14 h-14"
          />
          <div className="mx-2">
            <Text label="Amrose Birani" />
            <div className="flex flex-row">
              <Text
                label="Son"
                color="white"
                textSize="text-xs"
                textStyles="px-1 bg-gray-900 mr-2"
              />
              <Text
                label="Lead Developer"
                color="white"
                textSize="text-xs"
                textStyles="px-1 bg-gray-800"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-none md:flex-1">
          <Text
            label="91 Follower &#8226;"
            textSize="text-xs"
            textStyles="px-1"
          />
          <Text label="10 Posts &#8226;" textSize="text-xs" textStyles="px-1" />
          <Text label="14L invested" textSize="text-xs" textStyles="px-1" />
        </div>
      </div>
    </>
  ),
};

export const ThemeActivity = Template.bind({});
ThemeActivity.args = {
  rootClassName: "flex flex-wrap m-2",
  children: (
    <div className="p-2 rounded min-w-max mx-3 border-blue-200 border-2 shadow-lg">
      <div className="flex flex-row space-x-2 md:space-x-6">
        <Avatar
          src={require("../../../assets/avatar/avatar_2.png")}
          loading={false}
          username="User Avatar"
          avatarStyles="m-auto w-16 h-16 "
        />
        <Text
          label="@trendinvestor"
          textStyles="align-left"
          weight={600}
          color="#0D47A1"
        />
        <Text label="6h ago" textStyles="" weight={200} color="#0D47A1" />
      </div>
      <div className="flex flex-row bg-purple-300 p-2 rounded">
        <div className="" style={{ color: "#0D47A1" }}>
          Invested in <span style={{ fontWeight: 400 }}>TATAMOTORS</span> @1230
        </div>
      </div>
    </div>
  ),
};

export const ThemeActivityPost = Template.bind({});
ThemeActivityPost.args = {
  rootClassName: "flex flex-wrap",
  children: (
    <div className="rounded-2xl  border-2 shadow-md">
      <div className="flex flex-row p-4">
        <Avatar
          src={require("../../../assets/avatar/avatar_2.png")}
          loading={false}
          username="User Avatar"
          avatarStyles="w-8 h-8 md:w-14 md:h-14"
        />
        <div className="flex flex-col ml-2">
          <div className="flex">
            <div className="flex flex-col">
              <Text
                label="AMROSE BIRANI"
                textStyles="p-0 m-0"
                color="#2461EF"
                weight={300}
                textSize="text-base sm:text-sm"
              />
              <Text
                label="2w ago"
                textStyles="p-0 m-0"
                weight={300}
                textSize="text-sm sm:text-xs"
              />
            </div>
            <Avatar
              src={require("../../../assets/more.svg")}
              loading={false}
              username="More"
              avatarStyles="w-6 ml-auto self-start"
            />
          </div>
          <Text
            label="Will thermal will die soon ?  #Oil&Gas"
            textStyles=""
            weight={400}
            textSize="text-base"
          />
          <img
            src={require("../../../assets/Postimg.png")}
            className="object-scale-down w-64"
          />
        </div>
      </div>
      <div className="my-2 px-4 border-t-2 border-b-2 flex justify-between">
        <div className="flex space-x-2">
          <div className="bg-blue-600 rounded-full w-6 h-6 self-center" />
          <Text label="Like" weight={300} textSize="text-sm" />
        </div>
        <div className="flex space-x-2">
          <Text label="32 Likes" weight={300} textSize="text-sm" />
          <Text label="12 comments" weight={300} textSize="text-sm" />
        </div>
      </div>
      <div className="my-2 px-4 flex space-x-4">
        <Avatar
          src={require("../../../assets/avatar/avatar_111.png")}
          loading={false}
          username="User Avatar"
          avatarStyles="w-6 h-6 md:w-12 md:h-12 self-center"
        />
        <Input type="text" placeholder="Write your thoughts" tailwindClass="border-none bg-gray-100 rounded-3xl text-sm pl-4 w-full"/>
      </div>
    </div>
  ),
};
