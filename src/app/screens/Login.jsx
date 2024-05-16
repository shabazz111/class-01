import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../Components/AuthForm";

const Login = () => {
  return <AuthForm isLoading={false} onClickEvent={()=>alert("hello")} formTitle={"Login"} color={"green"} formType={"login"} />;
};

export default Login;
