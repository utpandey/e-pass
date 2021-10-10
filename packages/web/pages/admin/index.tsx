import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Text } from "@epass/components";
import AdminCard from "../../components/Cards/AdminCard";
import { AdminModal } from "../../components/Modals/AdminModal";
import { IUserProfile } from "../../interfaces";
import { RootState } from "../../store/reducers";
import withAuth from "../../utils/withAuth";
import { authApi } from "../api/authApi";

interface IState {
  adminData?: IUserProfile[] | null;
  showModal: boolean;
}

const adminStaticData: Array<IUserProfile> = [
  {
    email: "amrose@investiq.app",
    full_name: "Amrose Birani",
    id: 1,
    is_active: true,
    is_superuser: true,
  },
  {
    email: "amrose@investiq.app",
    full_name: "Arpit Sanghvi",
    id: 2,
    is_active: true,
    is_superuser: true,
  },
  {
    email: "amrose@investiq.app",
    full_name: "Ankit",
    id: 3,
    is_active: true,
    is_superuser: true,
  },
  {
    email: "amrose@investiq.app",
    full_name: "Some Other",
    id: 4,
    is_active: true,
    is_superuser: true,
  },
  {
    email: "amrose@investiq.app",
    full_name: "Arpit Sanghvi",
    id: 5,
    is_active: true,
    is_superuser: true,
  },
  {
    email: "amrose@investiq.app",
    full_name: "Ankit",
    id: 6,
    is_active: true,
    is_superuser: true,
  },
];

const Admin: React.FC<IState> = () => {
  const [adminData, setAdminData] = useState<IUserProfile[]>([]);
  console.log(adminData);
  const [showModal, setModal] = useState<boolean>(false);
  const token = useSelector(
    (state: RootState) => state?.auth?.user?.access_token
  );
  useEffect(() => {
    (async function () {
      const data = await (await authApi.getUsers(token))?.data;
      setAdminData(data);
    })();
  }, [token]);
  return (
    <>
      <div className="flex flex-col p-5 mx-auto">
        <div className="flex flex-wrap">
          {adminStaticData.map((data: IUserProfile) => {
            return <AdminCard data={data} key={data.id} />;
          })}
        </div>
        <div
          className="flex flex-col bg-gray-100 p-10 m-5 md:m-5 mx-auto my-5 rounded-sm shadow-md max-w-max cursor-pointer"
          onClick={() => setModal(!showModal)}
        >
          <i className="fas fa-plus fa-3x mx-auto p-3" />
          <Text
            textLabel="Add New Admin"
            textStyles="p-3 mx-auto text-xl md:text-2xl"
          />
        </div>
      </div>
      <AdminModal showModal={showModal} setModal={showModal} />
    </>
  );
};

export default withAuth(Admin);
