import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import CustomAlert from "../../components/CustomAlert";
import CustomHeader from "../../components/CustomHeader";
import authHeader from "../../services/authHeader";
import Toggle from "react-toggle";

function EditTest() {
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [desc, setDesc] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);

  const { testId } = useParams();
  const history = useHistory();
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${API_URL}/test/${testId}`);
      const { number, title, duration, desc, isActive } = res.data.data;

      setNumber(number);
      setTitle(title);
      setDuration(duration);
      setDesc(desc);
      setIsActive(isActive);
    }

    getData();
  }, [API_URL, testId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { number, title, duration, desc, isActive };

    const res = await axios.put(`${API_URL}/test/update/${testId}`, data, {
      headers: authHeader(),
    });

    setMessage(res.data.message);
    setMessageStatus(res.status);

    history.replace("/dashboard/test");
  };

  return (
    <div className="w-full m-4">
      <CustomHeader link="/dashboard/test">Edit Try Out</CustomHeader>
      <div className="mt-3">
        {message && (
          <CustomAlert
            message={message}
            messageStatus={messageStatus}
            setMessage={() => setMessage(null)}
          />
        )}
      </div>
      <div className="flex justify-center w-full">
        <form
          onSubmit={handleSubmit}
          className="form bg-white p-6 my-6 rounded-md"
        >
          <input
            type="number"
            name="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="No Urut"
            className="border p-2 w-full mt-3 text-sm"
          />
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Judul"
            className="border p-2 w-full mt-3 text-sm"
          />
          <input
            type="text"
            name="duration"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Durasi (dalam menit)"
            className="border p-2 w-full mt-3 text-sm"
          />
          <textarea
            name="desc"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            cols="10"
            rows="3"
            placeholder="Deskripsi"
            className="border p-2 mt-3 w-full text-sm"
          ></textarea>
          <div className="flex mb-4 items-center justify-end">
            <div className="mr-4">Status</div>
            <Toggle
              checked={isActive}
              aria-label="No label tag"
              onChange={() => setIsActive(!isActive)}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-full mt-6 bg-green-500 hover:bg-green-400 text-white cursor-pointer rounded-md font-medium p-3"
          />
        </form>
      </div>
    </div>
  );
}

export default EditTest;
