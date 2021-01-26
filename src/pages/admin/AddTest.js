import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import Toggle from "react-toggle";

import { useHistory } from "react-router-dom";

import authHeader from "../../services/authHeader";

import CustomHeader from "../../components/CustomHeader";
import CustomAlert from "../../components/CustomAlert";
import CustomButton from "../../components/CustomButton";

import "react-toggle/style.css";

function AddTest() {
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const history = useHistory();
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (values, { setSubmitting }) => {
    const { number, title, duration, desc } = values;

    const data = { number, title, duration, desc, isActive };

    const res = await axios.post(`${API_URL}/test`, data, {
      headers: authHeader(),
    });

    setMessage(res.data.message);
    setMessageStatus(res.status);

    history.replace("/dashboard/test");
  };

  let schema = yup.object().shape({
    number: yup.string().required("Nomor harus diisi!"),
    title: yup.string().required("Judul harus diisi!"),
    duration: yup.string().required("Durasi harus diisi!"),
    desc: yup.string().required("Deskripsi harus diisi!"),
  });

  return (
    <div className="w-full m-4">
      <CustomHeader link="/dashboard/test">Tambah Try Out</CustomHeader>
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
          number: "",
          title: "",
          duration: "",
          desc: "",
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
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-1/2 bg-white p-6 my-6 rounded-md"
            >
              <input
                type="number"
                name="number"
                id="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
                placeholder="No Urut"
                className="border p-2 w-full mt-3 text-sm"
              />
              <div className="mt-2 text-red-500">
                {errors.number && touched.number && errors.number}
              </div>
              <input
                type="text"
                name="title"
                id="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Judul"
                className="border p-2 w-full mt-3 text-sm"
              />
              <div className="mt-2 text-red-500">
                {errors.title && touched.title && errors.title}
              </div>
              <input
                type="text"
                name="duration"
                id="duration"
                value={values.duration}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Durasi (dalam menit)"
                className="border p-2 w-full mt-3 text-sm"
              />
              <div className="mt-2 text-red-500">
                {errors.duration && touched.duration && errors.duration}
              </div>
              <textarea
                name="desc"
                id="desc"
                value={values.desc}
                onChange={handleChange}
                onBlur={handleBlur}
                cols="10"
                rows="3"
                placeholder="Deskripsi"
                className="border p-2 mt-3 w-full text-sm"
              ></textarea>
              <div className="mt-2 text-red-500">
                {errors.desc && touched.desc && errors.desc}
              </div>
              <div className="flex mb-4 items-center justify-end">
                <div className="mr-4">Status</div>
                <Toggle
                  checked={isActive}
                  aria-label="No label tag"
                  onChange={() => setIsActive(!isActive)}
                />
              </div>
              <CustomButton type="submit" disabled={isSubmitting}>
                Submit
              </CustomButton>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default AddTest;
