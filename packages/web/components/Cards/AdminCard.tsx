import React from "react";
import { IUserProfile } from "../../interfaces";
import { Button, Text } from "@epass/components";

interface IProps {
  data: IUserProfile;
}

const AdminCard: React.FC<IProps> = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex flex-col p-2 bg-gray-100 rounded-sm shadow-md min-w-min px-5 md:m-5  mx-auto my-5">
      {data.full_name ? (
        <Text textLabel={data.full_name} textStyles="md:text-2xl text-4xl" />
      ) : data.email ? (
        <Text textLabel={data.email} textStyles="md:text-2xl text-4xl" />
      ) : (
        <Text textLabel="Some User" textStyles="md:text-2xl text-4xl" />
      )}
      <Text
        textLabel="Roles"
        weight={400}
        textSize="text-2xl md:text-xl py-1 "
      />
      <div className="py-1">
        {data.is_superuser ? (
          <Text
            textLabel="super-user"
            textStyles="bg-gray-200 max-w-max text-center px-2 text-3xl md:text-lg"
            weight={300}
          />
        ) : null}
      </div>
      <div className="flex flex-row py-2">
        <Button
          label="Edit Roles"
          primary={true}
          borderRadius="-none"
          lineHeight="none"
          size="large"
          labelStyles="whitespace-nowrap text-xl md:text-base"
        />
        <Button
          label="View Creds"
          primary={true}
          borderRadius="-none"
          lineHeight="none"
          size="large"
          labelStyles="mx-2 whitespace-nowrap text-xl md:text-base"
        />
      </div>
    </div>
  );
};

export default AdminCard;
