import React, { useEffect } from "react";
import { Button } from "./components/ui/button";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Shareable/Header";
import SideBar from "./Shareable/SideBar";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // const token = localStorage.getItem("access_token");
    // if (token) {
    //   navigate("/home");
    // } else {
    //   navigate("/login");
    // }
  }, []);
  return (
    <>
      <div className="w-full min-h-screen flex">
        <SideBar />
        <div className="flex flex-col w-full ml-56">
          <Header />
          <div className="bg-muted flex-1 ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
