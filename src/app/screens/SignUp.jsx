import React, { useState } from "react";
import AuthForm from "../Components/AuthForm";

const Signup = () => {
  const [loader, setLoader] = useState(false);


  const fetchAPi = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  };

  return (
    <AuthForm
      isLoading={loader}
      onClickEvent={fetchAPi}
      formTitle={"Signup"}
      color={"blue"}
      formType={"signup"}
    />
  );
};

export default Signup;
