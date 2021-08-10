import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history.push("/login", { replace: true });
        dispatch({ type: "USER", payload: false });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        } else {
          window.alert("Logout Successfull");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div></div>;
};

export default Logout;
