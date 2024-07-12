import React, { useEffect, useState, useMemo } from "react";
import Dashboard from "./pages/Dashboard";
import Sidebar from "../../component/Sidebar";
import { NavigationContext } from "../../context/context";
import Registration from "./pages/Registration";
import Booking from "./pages/Booking";
import Login from "../Auth/Login";
import Partner from "./pages/Partner";
import Dropdown from "../../component/Dropdown";
import { useNavigate } from "react-router-dom";
import Loading from "../../component/Loading";
import Staffs from "./pages/Staffs";
import Reports from "./pages/Reports";
import Inquiries from "./pages/Inquiries";
import Sites from "./pages/Sites";

function MainDashboard() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [dropdown, setOpenDropDown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpenSideBar] = useState(false);

  const navigate = useNavigate();

  const renderPage = useMemo(() => {
    switch (activeTab) {
      case "tab1":
        return <Dashboard />;
      case "tab2":
        return <Staffs />;
      case "register":
        return <Registration />;
      case "tab3":
        return <Booking />;
      case "tab4":
        return <Partner />;
      case "tab5":
        return <Sites />;
      case "tab7":
        return <Reports />;
      case "tab8":
        return <Inquiries />;
      default:
        return <Dashboard />;
    }
  }, [activeTab]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };
  const handleOnClick = (activeTab) => {
    switch (activeTab) {
      case "tab1":
        setActiveTab("tab1");
        break;

      case "tab2":
        setActiveTab("tab2");
        break;

      case "register":
        setActiveTab("register");
        break;

      case "tab3":
        setActiveTab("tab3");
        break;

      case "tab4":
        setActiveTab("tab4");
        break;

      case "tab5":
          setActiveTab("tab5");
        break;

      case "tab7":
        setActiveTab("tab7");
        break;

      case "tab8":
        setActiveTab("tab8");
        break;
    }
  };

  const handleOpen = () => {
    setOpenDropDown(!dropdown);
  };

  const handleOpenSideBar = (data) => {
    switch (data) {
      case "closeSidebar":
        setOpenSideBar(false);
        break;

      case "openSidebar":
        setOpenSideBar(true);
        break;
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex justify-center relative overflow-x-hidden">
          <div
            className={`${open ? "visible" : "visible sm:hidden"} sm:z-10 sm:absolute sm:left-0`}
          >
            <NavigationContext.Provider
              value={{
                activePage: (data) => handleOnClick(data),
                onOpenSidebar: (data) => handleOpenSideBar(data),
                openSidebar: open,
              }}
            >
              <Sidebar />
            </NavigationContext.Provider>
          </div>
          <div className={`${open ? "sm:hidden" : "sm:visible lg:hidden xl:hidden"}`}>
            <button onClick={() => handleOpenSideBar("openSidebar")}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(5).png?alt=media&token=e87a188b-4123-4845-85cf-2c9436f89753"
                className="w-10 h-10 absolute ml-10 cursor-pointer"
              />
            </button>
          </div>
          <div className="w-full items-center mt-5 px-5">
            <div className="gap-3 flex justify-end w-full">
              <div className="relative">
                <svg
                  fill="#5925e9"
                  height="30px"
                  width="30px"
                  cursor="pointer"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 611.999 611.999"
                  xml:space="preserve"
                  stroke="#5925e9"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578 c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626 h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856 c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626 C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32 c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082 c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826 c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485 c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"></path>{" "}
                          <path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258 c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258 C323.259,126.96,315.532,119.235,306.001,119.235z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <div className="w-3 h-3 rounded-full bg-blue-800 animate-pulse absolute top-0 right-0 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-slate-400 animate-pulse z-10"></div>
                </div>
              </div>
              <div className="flex justify-center item-center relative mr-10">
                <span>Test</span>
                <div className="grid place-items-center">
                  <button onClick={() => handleOpen()}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/arrowDown.png?alt=media&token=9249b8aa-1b8e-4e37-99aa-3d069ce9e75a"
                      alt="Accordion"
                      className="h-5 w-5 ml-10"
                    />
                  </button>
                  <div
                    className={`${dropdown ? "visible absolute mt-28 bg-slate-300 w-36" : "hidden"}`}
                  >
                    <Dropdown btnName="Setting" />
                    <Dropdown onClick={() => handleLogout()} btnName="Logout" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-10 z-0">
              <NavigationContext.Provider
                value={{
                  activePage: (data) => handleOnClick(data),
                }}
              >
                {renderPage}
              </NavigationContext.Provider>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainDashboard;
