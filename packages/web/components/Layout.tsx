import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import {useSelector} from 'react-redux'
import { RootState } from "../store/reducers";

interface ILayout {
  children: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state?.auth?.isAuthenticated)
  return (
    <div className="flex flex-col md:flex-row">
      {isAuthenticated ? <Sidebar /> : null}
          {children}
    </div>
  );
};
export default Layout;
