import React from "react";
import { FormContext } from "../../context/context";
import Form from "../../component/Form";
import Button from "../../component/Button";
import { Link } from "react-router-dom";

function ForgotPass() {
  const forgotPass = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Email",
    },
  ];
  return (
    <div className="w-full h-[100vh] grid place-items-center">
      <div className="w-96 h-48 bg-slate-800 rounded-lg relative sm:w-72">
        <div className="h-full w-full grid place-items-center">
          <FormContext.Provider
            value={{
              initialFields: forgotPass,
              title: "Forgot Password",
            }}
          >
            <Form />
          </FormContext.Provider>
          <Button bgColor="blue" btnSize="fullWidth">
            Submit
          </Button>
          <Link to="/login">
            <span className="text-blue-500 hover:text-blue-200">
              Back to Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
