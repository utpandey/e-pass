import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { text } from "@storybook/addon-knobs";

import { ThemeHome, IThemeHomeProps } from "./index";
import { Text } from "../../atoms/Text";
import { Input } from "../../atoms/Input";
import { Avatar } from "../../atoms/Avatar";
import { Button } from "../../atoms/Button";
import { Card } from "../../molecules/Card";
import user from "../../../assets/user.svg";
import zomato from "../../../assets/Zomato.png";

const props = () => ({
  label: text("Legend ID (legendId)", "formgroup-legend-id"),
  legendText: text("Legend text (legendText)", "FormGroup Legend"),
});

export default {
  title: "Pages/ThemeHome",
  component: ThemeHome,
} as Meta;

const Template: Story<IThemeHomeProps> = (args) => (
  <ThemeHome {...args} {...props} />
);

export const ThemeHomeItem = Template.bind({});

ThemeHomeItem.args = {
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

export const DefaultThemeHome = Template.bind({});
// DefaultThemeHome.args = {
//   rootClassName: "p-4 w-full",
//   children: (
//     <div className="flex">
//       <div className="flex flex-col">
//         <Text textLabel="OIL & GAS" textSize="text-4xl" weight={400} />
//         <Text textLabel="14k Invested 70k Followers" textStyles="m-0" />
//         <Button
//           primary={true}
//           textLabel="FOLLOW"
//           borderRadius="rounded-none"
//           labelStyles="text-2xl py-1 px-3 text-center my-3 w-min"
//         />
//         <Text textLabel="Activity" />
//         <div className="rounded-2xl  border-2 shadow-md">
//           <div className="flex flex-row p-4">
//             <Avatar
//               src={require("../../../assets/avatar/avatar_2.png")}
//               loading={false}
//               username="User Avatar"
//               avatarStyles="w-8 h-8 md:w-14 md:h-14"
//             />
//             <div className="flex flex-col ml-2">
//               <div className="flex">
//                 <div className="flex flex-col">
//                   <Text
//                     textLabel="AMROSE BIRANI"
//                     textStyles="p-0 m-0"
//                     color="#2461EF"
//                     weight={300}
//                     textSize="text-base sm:text-sm"
//                   />
//                   <Text
//                     textLabel="2w ago"
//                     textStyles="p-0 m-0"
//                     weight={300}
//                     textSize="text-sm sm:text-xs"
//                   />
//                 </div>
//                 <Avatar
//                   src={require("../../../assets/more.svg")}
//                   loading={false}
//                   username="More"
//                   avatarStyles="w-6 ml-auto self-start"
//                 />
//               </div>
//               <Text
//                 textLabel="Will thermal will die soon ?  #Oil&Gas"
//                 textStyles=""
//                 weight={400}
//                 textSize="text-base"
//               />
//               <img
//                 src={require("../../../assets/Postimg.png")}
//                 className="object-scale-down w-64"
//               />
//             </div>
//           </div>
//           <div className="my-2 px-4 border-t-2 border-b-2 flex justify-between">
//             <div className="flex space-x-2">
//               <div className="bg-blue-600 rounded-full w-6 h-6 self-center" />
//               <Text textLabel="Like" weight={300} textSize="text-sm" />
//             </div>
//             <div className="flex space-x-2">
//               <Text textLabel="32 Likes" weight={300} textSize="text-sm" />
//               <Text textLabel="12 comments" weight={300} textSize="text-sm" />
//             </div>
//           </div>
//           <div className="my-2 px-4 flex space-x-4">
//             <Avatar
//               src={require("../../../assets/avatar/avatar_111.png")}
//               loading={false}
//               username="User Avatar"
//               avatarStyles="w-6 h-6 md:w-12 md:h-12 self-center"
//             />
//             <Input
//               type="text"
//               placeholder="Write your thoughts"
//               tailwindClass="border-none bg-gray-100 rounded-3xl text-sm pl-4 w-full"
//             />
//           </div>
//         </div>
//         <div className="p-2 rounded min-w-max border-blue-200 border-2 shadow-lg mt-5">
//           <div className="flex flex-row space-x-2 md:space-x-6">
//             <Avatar
//               src={require("../../../assets/avatar/avatar_2.png")}
//               loading={false}
//               username="User Avatar"
//               avatarStyles="m-auto w-16 h-16 "
//             />
//             <Text
//               textLabel="@trendinvestor"
//               textStyles="align-left"
//               weight={600}
//               color="#0D47A1"
//             />
//             <Text textLabel="6h ago" textStyles="" weight={200} color="#0D47A1" />
//           </div>
//           <div className="flex flex-row bg-purple-300 p-2 rounded">
//             <div className="" style={{ color: "#0D47A1" }}>
//               Invested in <span style={{ fontWeight: 400 }}>TATAMOTORS</span>{" "}
//               @1230
//             </div>
//           </div>
//         </div>
//         <div className="p-2 rounded min-w-max border-blue-200 border-2 shadow-lg mt-5">
//           <div className="flex flex-row space-x-2 md:space-x-6">
//             <Avatar
//               src={require("../../../assets/avatar/avatar_2.png")}
//               loading={false}
//               username="User Avatar"
//               avatarStyles="m-auto w-16 h-16 "
//             />
//             <Text
//               textLabel="@trendinvestor"
//               textStyles="align-left"
//               weight={600}
//               color="#0D47A1"
//             />
//             <Text textLabel="6h ago" textStyles="" weight={200} color="#0D47A1" />
//           </div>
//           <div className="flex flex-row bg-green-300 p-2 rounded">
//             <div className="" style={{ color: "#0D47A1" }}>
//               Invested in <span style={{ fontWeight: 400 }}>TATAMOTORS</span>{" "}
//               @1230
//             </div>
//           </div>
//         </div>
//         <div className="p-2 rounded min-w-max border-blue-200 border-2 shadow-lg mt-5">
//           <div className="flex flex-row space-x-2 md:space-x-6">
//             <Avatar
//               src={require("../../../assets/avatar/avatar_2.png")}
//               loading={false}
//               username="User Avatar"
//               avatarStyles="m-auto w-16 h-16 "
//             />
//             <Text
//               textLabel="@trendinvestor"
//               textStyles="align-left"
//               weight={600}
//               color="#0D47A1"
//             />
//             <Text textLabel="6h ago" textStyles="" weight={200} color="#0D47A1" />
//           </div>
//           <div className="flex flex-row bg-red-300 p-2 rounded">
//             <div className="" style={{ color: "#0D47A1" }}>
//               Invested in <span style={{ fontWeight: 400 }}>TATAMOTORS</span>{" "}
//               @1230
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col flex-auto items-end">
//         <Text textLabel="Featured Stocks" />
//         <div className="rounded py-4 px-4 my-2 bg-gray-200 max-w-xs  space-y-2 space-x-4 sm:py-4 flex w-auto">
//           <Avatar
//             src={require("../../../assets/ONGC.png")}
//             loading={false}
//             username="ONGC"
//             avatarStyles="mx-auto"
//           />
//           <Text
//             textLabel="ONGC"
//             color="black"
//             weight={400}
//             family="Roboto"
//             textStyles="text-center"
//           />
//           <Text textLabel="1498 (+5%)" color="green" textStyles="text-center" />
//         </div>
//         <div className="rounded py-4 px-4 my-2 bg-gray-200 max-w-xs  space-y-2 space-x-4 sm:py-4 flex w-auto">
//           <Avatar
//             src={require("../../../assets/ONGC.png")}
//             loading={false}
//             username="ONGC"
//             avatarStyles="mx-auto"
//           />
//           <Text
//             textLabel="ONGC"
//             color="black"
//             weight={400}
//             family="Roboto"
//             textStyles="text-center"
//           />
//           <Text textLabel="1498 (+5%)" color="green" textStyles="text-center" />
//         </div>
//         <div className="rounded py-4 px-4 my-2 bg-gray-200 max-w-xs  space-y-2 space-x-4 sm:py-4 flex w-auto">
//           <Avatar
//             src={require("../../../assets/ONGC.png")}
//             loading={false}
//             username="ONGC"
//             avatarStyles="mx-auto"
//           />
//           <Text
//             textLabel="ONGC"
//             color="black"
//             weight={400}
//             family="Roboto"
//             textStyles="text-center"
//           />
//           <Text textLabel="1498 (+5%)" color="green" textStyles="text-center" />
//         </div>
//         <div className="rounded py-4 px-4 my-2 bg-gray-200 max-w-xs  space-y-2 space-x-4 sm:py-4 flex w-auto">
//           <Avatar
//             src={require("../../../assets/ONGC.png")}
//             loading={false}
//             username="ONGC"
//             avatarStyles="mx-auto"
//           />
//           <Text
//             textLabel="ONGC"
//             color="black"
//             weight={400}
//             family="Roboto"
//             textStyles="text-center"
//           />
//           <Text textLabel="1498 (+5%)" color="green" textStyles="text-center" />
//         </div>
//         <Button
//           primary={true}
//           textLabel="View All"
//           borderRadius="rounded-none"
//           labelStyles="text-lg text-center mt-1 bg-black text-bg-white w-max"
//         />
//         <Text textLabel="Featured People" />
//         <Card rootClassName="flex flex-wrap my-2">
//           <div className="p-2 bg-gray-200 rounded min-w-max ">
//             <div className="flex flex-row">
//               <Avatar
//                 src={require("../../../assets/avatar/avatar_111.png")}
//                 loading={false}
//                 username="User Avatar"
//                 avatarStyles="m-auto w-14 h-14"
//               />
//               <div className="mx-2">
//                 <Text textLabel="Arpit Sanghvi" />
//                 <div className="flex flex-row">
//                   <Text
//                     textLabel="Father"
//                     color="white"
//                     textSize="text-xs"
//                     textStyles="px-1 bg-gray-900 mr-2"
//                   />
//                   <Text
//                     textLabel="Product Manager"
//                     color="white"
//                     textSize="text-xs"
//                     textStyles="px-1 bg-gray-800"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row flex-none md:flex-1">
//               <Text
//                 textLabel="46 Follower &#8226;"
//                 textSize="text-xs"
//                 textStyles="px-1"
//               />
//               <Text
//                 textLabel="120 Posts &#8226;"
//                 textSize="text-xs"
//                 textStyles="px-1"
//               />
//               <Text textLabel="5L invested" textSize="text-xs" textStyles="px-1" />
//             </div>
//           </div>
//         </Card>
//         <Card rootClassName="flex flex-wrap my-2">
//           <div className="p-2 bg-gray-200 rounded min-w-max ">
//             <div className="flex flex-row">
//               <Avatar
//                 src={require("../../../assets/avatar/avatar_111.png")}
//                 loading={false}
//                 username="User Avatar"
//                 avatarStyles="m-auto w-14 h-14"
//               />
//               <div className="mx-2">
//                 <Text textLabel="Arpit Sanghvi" />
//                 <div className="flex flex-row">
//                   <Text
//                     textLabel="Father"
//                     color="white"
//                     textSize="text-xs"
//                     textStyles="px-1 bg-gray-900 mr-2"
//                   />
//                   <Text
//                     textLabel="Product Manager"
//                     color="white"
//                     textSize="text-xs"
//                     textStyles="px-1 bg-gray-800"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row flex-none md:flex-1">
//               <Text
//                 textLabel="46 Follower &#8226;"
//                 textSize="text-xs"
//                 textStyles="px-1"
//               />
//               <Text
//                 textLabel="120 Posts &#8226;"
//                 textSize="text-xs"
//                 textStyles="px-1"
//               />
//               <Text textLabel="5L invested" textSize="text-xs" textStyles="px-1" />
//             </div>
//           </div>
//         </Card>
//         <Text textLabel="Upcoming IPOs" textStyles="" weight={400} />
//         <Card>
//           <div className="rounded py-4 px-4 my-2 bg-gray-200 max-w-xs  space-y-2 space-x-4 sm:py-4 flex w-auto">
//             <Avatar
//               src={require("../../../assets/Zomato.png")}
//               loading={false}
//               username="ONGC"
//               avatarStyles="mx-auto"
//             />
//             <Text
//               textLabel="ZOMATO"
//               color="black"
//               weight={400}
//               family="Roboto"
//               textStyles="text-center"
//             />
//             <Text textLabel="72-76" color="black" textStyles="text-center" />
//           </div>
//         </Card>
//         <Button
//           primary={true}
//           textLabel="Create Post"
//           borderRadius="rounded-full"
//           labelStyles="text-lg text-center my-4"
//           icon={user}
//           iconStyles="w-6 mr-2"
//         />
//       </div>
//     </div>
//   ),

// };
