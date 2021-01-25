import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import CustomButton from "../../components/CustomButton";
import CustomAlert from "../../components/CustomAlert";
import axios from "axios";
import authHeader from "../../services/authHeader";
import { AuthContext } from "../../context/AuthContext";

const ChangePassword = () => {
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);

  const [auth] = useContext(AuthContext);

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (values, { setSubmitting }) => {
    const { password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setMessage("Konfirmasi password tidak sama!");
      setMessageStatus(400);
    } else {
      const res = await axios.put(
        `${API_URL}/user/password/${auth.user._id}`,
        { password },
        {
          headers: authHeader(),
        }
      );

      setMessage(res.data.message);
      setMessageStatus(res.status);
    }
  };

  let schema = yup.object().shape({
    password: yup
      .string()
      .min(8, "Password minimal 8 karakter!")
      .required("Password harus diisi!"),
    confirmPassword: yup
      .string()
      .min(8, "Konfirmasi password minimal 8 karakter!")
      .required("Konfirmasi password harus diisi!"),
  });

  return (
    <div className="p-10 mx-auto">
      <div className="bg-white w-96 rounded-md py-10 px-8">
        <div className="font-medium text-base mb-6">Ganti Password</div>
        <div className="mt-3">
          {message && (
            <CustomAlert
              message={message}
              messageStatus={messageStatus}
              setMessage={() => setMessage(null)}
            />
          )}
        </div>

        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
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
            <div className="flex justify-center w-full">
              <form onSubmit={handleSubmit} className="w-full">
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                  className="border p-2 w-full text-sm"
                />
                <div className="mt-2 text-red-500">
                  {errors.password && touched.password && errors.password}
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Konfirmasi password"
                  className="border p-2 w-full mt-3 text-sm"
                />
                <div className="mt-2 text-red-500">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </div>

                <div className="mt-8">
                  <CustomButton type="submit" disabled={isSubmitting}>
                    Submit
                  </CustomButton>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
