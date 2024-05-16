import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const AuthForm = ({ formTitle, formType, color, isLoading, onClickEvent }) => {
  return (
    <section className="w-full h-screen bg-gray-900 flex justify-center items-center">
      <div className=" h-96 md:h-fit flex justify-evenly  flex-col w-96 bg-white rounded-md p-4 ">
        <span>{formTitle} Form</span>
        {formType == "signup" ? (
          <input
            type="text"
            className="w-full p-2 rounded-md border mt-3"
            placeholder="name"
          />
        ) : null}
        <input
          type="text"
          className="w-full p-2 rounded-md border mt-3"
          placeholder="email"
        />
        <input
          type="text"
          className="w-full p-2 rounded-md border mt-3"
          placeholder="password"
        />
        {formType == "login" ? (
          <div className="flex w-full mt-4 items-center  justify-between ">
            <div className="flex items-center h-full gap-2 text-sm">
              <input
                type="checkbox"
                id="check"
                name="check"
                className="w-4 h-4 rounded-md border "
              />
              <label
                htmlFor="check"
                className="h-4 flex cursor-pointer justify-center items-center"
              >
                Remember Me
              </label>
            </div>

            <div className="text-blue-600 text-sm cursor-pointer">
              <span>Forgot password?</span>
            </div>
          </div>
        ) : null}
        <Button
          isLoading={isLoading}
          onClickEvent={onClickEvent}
          color={color}
        />
        <div className="flex hover:underline hover:text-blue-500 p-2">
          <Link to={`/${formType == "login" ? "signup" : "login"}`}>
            {formType == "login" ? "signup" : "login"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
