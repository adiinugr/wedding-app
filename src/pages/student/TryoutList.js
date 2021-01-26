import { MdAccessTime } from "react-icons/md";
import Moment from "react-moment";
import axios from "axios";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function TryoutList() {
  const [auth] = useContext(AuthContext);
  const [tests, setTests] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${API_URL}/test`);
      if (res.data.data.length > 0) {
        setTests(res.data.data);
      }
    }

    getData();
  }, [API_URL]);

  return (
    <div className="flex flex-col md:h-full md:flex-row">
      <div className="md:w-2/5 rounded-md p-6 m-4 md:mr-0 text-lg flex items-center">
        <div>
          <p className="mb-4">
            <span className="font-bold text-2xl text-green-600">Hai, </span>{" "}
            <span className="font-bold text-4xl text-green-700">
              {auth.user.name}
            </span>
          </p>
          Dengan{" "}
          <span className="font-bold text-4xl text-green-600">Try Out</span> ini
          kamu bisa{" "}
          <span className="font-bold text-3xl text-green-900">melatih</span>{" "}
          dirimu dalam pengerjaan soal. Jadikan ini sebagai bahan{" "}
          <span className="font-bold text-4xl text-green-600">evaluasi</span>{" "}
          <span className="font-bold text-2xl text-green-700">kelemahanmu</span>{" "}
          di bagian mana. Sehingga belajarmu lebih{" "}
          <span className="font-bold text-5xl text-green-800">terprogram</span>{" "}
          dan <span className="font-bold text-3xl text-green-700">efektif</span>
          .
        </div>
      </div>
      <div className="md:w-3/5 rounded-md m-4 md:overflow-auto">
        {tests.length === 0 ? (
          <div className="bg-white p-4 rounded-md text-center">
            Belum ada tryout. Sabar ya!
          </div>
        ) : (
          tests.map((test) => (
            <div
              key={test._id}
              className="bg-white py-4 px-6 flex mb-3 justify-between  rounded-md"
            >
              <div className="flex flex-col w-full mb-2 ">
                <p className="font-medium text-lg mb-1 text-green-800">
                  {test.title}
                </p>
                <div className="flex items-center text-gray-800 mb-4 text-sm italic">
                  <div className="mr-3">
                    <Moment format="D MMM YYYY">{test.createdAt}</Moment>
                  </div>
                  <div className="flex items-center">
                    <MdAccessTime />
                    <p className=" ml-1">{test.duration} menit</p>
                  </div>
                </div>
                <p className="text-gray-800">{test.desc}</p>
              </div>
              <div className="w-40 ml-4 flex items-center justify-center">
                {test.quizzes.length > 0 && test.isActive === true ? (
                  <Link to={`/test/${test._id}`}>
                    <button
                      className="
        bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 focus:outline-none active:bg-green-700"
                    >
                      Mulai
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => alert("Soal belum tersedia")}
                    className="
        bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 focus:outline-none active:bg-green-700"
                  >
                    Mulai
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
