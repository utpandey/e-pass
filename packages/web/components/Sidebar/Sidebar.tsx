import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/reducers/auth";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "../Dropdowns/UserDropdown";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-900 flex flex-wrap items-center relative md:min-h-screen min-w-max z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none  rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-10 py-3 px-6 ")}
          >
            <i className="fas fa-bars" />
          </button>
          <Link href="/admin">
            <a
              href="#"
              className={
                "md:underline no-underline hover:no-underline  text-center text-2xl md:text-4xl  text-white font-bold   block " +
                (router.pathname === "/admin"
                  ? " md:text-gray-500 hover:text-gray-500 md:hover:text-white "
                  : " hover:text-blue-400")
              }
              style={{ textUnderlinePosition: "under" }}
            >
              Admins
            </a>
          </Link>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto  items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#"
                      className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-2 "
                    >
                      Admins
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:text-white content-center md:text-2xl text-lg">
              <li className="self-center">
                <Link href="/admin/themes">
                  <a
                    href="#"
                    className={
                      "py-2 md:py-5 font-bold block " +
                      (router.pathname.indexOf("/admin/themes") !== -1
                        ? "text-gray-500 md:text-gray-400 hover:text-black md:hover:text-white "
                        : " hover:text-blue-400")
                    }
                  >
                    Themes
                  </a>
                </Link>
              </li>

              <li className="self-center">
                <Link href="/admin/stocks">
                  <a
                    href="#"
                    className={
                      "py-2 md:py-5 font-bold block " +
                      (router.pathname.indexOf("/admin/stocks") !== -1
                        ? "text-gray-500  md:text-gray-500 hover:text-black md:hover:text-white "
                        : " hover:text-blue-400")
                    }
                  >
                    Stocks
                  </a>
                </Link>
              </li>

              <li className="self-center">
                <Link href="/admin/users">
                  <a
                    href="#"
                    className={
                      "py-2 md:py-5 font-bold block " +
                      (router.pathname.indexOf("/admin/users") !== -1
                        ? "text-gray-500  md:text-gray-500 hover:text-black md:hover:text-white "
                        : " hover:text-blue-400")
                    }
                  >
                    Users
                  </a>
                </Link>
              </li>

              <li className="self-center">
                <Link href="/admin/userRequests">
                  <a
                    href="#"
                    className={
                      "py-2 md:py-5 font-bold inline-block text-center break-words" +
                      (router.pathname.indexOf("/admin/userRequests") !== -1
                        ? "text-gray-500  md:text-gray-500 hover:text-black md:hover:text-white "
                        : " hover:text-blue-400")
                    }
                  >
                    User Requests
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <h1
            className="cursor-pointer text-white md:text-2xl text-xl md:self-center ml-auto md:mx-auto"
            onClick={() => dispatch(LOGOUT())}
          >
            Logout
          </h1>
        </div>
      </nav>
    </>
  );
}
