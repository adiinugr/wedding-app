import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";

import LoginImage from "../assets/images/login.svg";
import CustomButton from "../components/CustomButton";
import CustomAlert from "../components/CustomAlert";
import { AuthContext } from "../context/AuthContext";

import Mtku from "../assets/images/mtku.png";

const Login = () => {
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values;

    await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setMessageStatus(data.status);
        setSubmitting(false);

        localStorage.setItem(
          "user",
          JSON.stringify({
            token: data.token,
            user: {
              _id: data.user._id,
            },
          })
        );
        setAuth({
          isAuth: true,
          user: data.user,
        });

        setTimeout(() => {
          history.push("/dashboard/tryout-list");
        }, 1000);
      });
  };

  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email harus valid!")
      .required("Email harus diisi!"),
    password: yup.string().required("Password harus diisi!"),
  });

  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-11 bg-green-50 lg:bg-white flex justify-center lg:px-12">
          <Link to="/">
            <img
              className="rounded-full"
              src={Mtku}
              alt="mathiaku"
              width={70}
            />
          </Link>
        </div>
        {message && (
          <CustomAlert
            message={message}
            messageStatus={messageStatus}
            setMessage={() => setMessage(null)}
          />
        )}
        <div className="mt-6 px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-2xl font-display font-semibold lg:text-left xl:text-4xl
                    xl:text-bold"
          >
            Log in
          </h2>
          <div className="mt-12 mb-12 md:mb-0">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className=" font-bold text-gray-700 tracking-wide">
                      Email Address
                    </div>
                    <input
                      className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="buggy@gmail.com"
                    />
                    <div className="mt-2 text-red-500">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-gray-700 tracking-wide">
                        Password
                      </div>
                    </div>
                    <input
                      className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="********"
                    />
                    <div className="mt-2 text-red-500">
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>
                  <div className="mt-10 mb-4 md:lg-0">
                    <CustomButton type="submit" disabled={isSubmitting}>
                      Login
                    </CustomButton>
                  </div>
                </form>
              )}
            </Formik>

            <div className=" mt-10 font-display font-semibold text-gray-700 text-center">
              Don't have an account ?{" "}
              <Link to="/register">
                <span className="cursor-pointer text-green-500 hover:text-green-600">
                  Sign up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center bg-green-50 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <img src={LoginImage} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
