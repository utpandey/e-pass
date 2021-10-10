import { Text } from "@epass/components";
import React from "react";
import withAuth from "../../utils/withAuth";

function Themes() {
  return (
    <div className="flex flex-col p-5 mx-auto">
      <div className="flex flex-wrap">
        {/* {adminStaticData.map((data: IUserProfile) => {
          return <AdminCard data={data} key={data.id} />;
        })} */}
      </div>
      <div className="flex flex-col bg-gray-100 p-10 m-5 rounded-sm shadow-md max-w-max cursor-pointer">
        <i className="fas fa-plus fa-3x mx-auto p-3" />
        <Text textLabel="Add New Theme" textStyles="p-3 mx-auto" />
      </div>
    </div>
  );
}

export default withAuth(Themes);
