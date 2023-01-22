import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import More from "../components/More/More";
import Airtime from "../pages/subscription/Airtime/Airtime";
import Cable from "../pages/subscription/Cable/Cable";
import Data from "../pages/subscription/Data/Data";
import Electricity from "../pages/subscription/Electricity/Electricity";

const Protectedroute = (props) => {
  var hostname = document.location.hostname;

  const [isLoggedIn, setisLoggedIn] = useState(false);

  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem(`${hostname}_token`);
    const userData = localStorage.getItem(`${hostname}_data`);
    if (
      (!userToken && !userData) ||
      (userData === "undefined" && userToken === "undefined")
    ) {
      setisLoggedIn(false);
      return navigate("/login");
    }
    setisLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn && <Airtime />}
      {isLoggedIn && <Cable />}
      {isLoggedIn && <Electricity />}
      {isLoggedIn && <Data />}
      {isLoggedIn && <More />}
    </>
  );
};

export default Protectedroute;
