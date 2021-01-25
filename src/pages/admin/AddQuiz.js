import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import CustomAlert from "../../components/CustomAlert";
import CustomHeader from "../../components/CustomHeader";
import TinyMceEditor from "../../components/TinyMceEditor";
import authHeader from "../../services/authHeader";

function AddQuiz() {
  const [number, setNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswer] = useState(["", "", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);

  const { testId } = useParams();
  const history = useHistory();
  const API_URL = process.env.REACT_APP_API_URL;

  const handleAnswerChange = (index, event) => {
    const values = [...answers];
    values[index] = event.target.value;
    setAnswer(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { number, question, answers, correctAnswer };

    try {
      const res = await axios.post(`${API_URL}/quiz/${testId}`, data, {
        headers: authHeader(),
      });

      setMessage(res.data.message);
      setMessageStatus(res.data.status);

      history.push(`/dashboard/test/quiz-list/${testId}`);
    } catch (error) {
      setMessage(error.message);
      setMessageStatus(400);
    }
  };

  return (
    <div className="w-full m-4">
      <CustomHeader link={`/dashboard/test/quiz-list/${testId}`}>
        Tambah Soal
      </CustomHeader>
      <div className="mt-3">
        {message && (
          <CustomAlert
            message={message}
            messageStatus={messageStatus}
            setMessage={() => setMessage(null)}
          />
        )}
      </div>
      <div className="md:flex justify-center ">
        <form onSubmit={handleSubmit} className="bg-white p-6 my-6 rounded-md">
          <div className="md:flex">
            <div className="md:mr-4">
              <input
                type="number"
                name="number"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Nomor Soal"
                className="border p-2 w-full mb-3 text-sm"
              />
              <div className="mb-2">
                <TinyMceEditor
                  initValue={question}
                  handleChange={(content) => setQuestion(content)}
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2">
                {answers.map((ans, index) => (
                  <input
                    key={index}
                    type="text"
                    className="border p-2 w-full text-sm"
                    placeholder={`Jawaban ${index + 1}`}
                    onChange={(event) => handleAnswerChange(index, event)}
                    value={ans}
                  />
                ))}
              </div>

              <select
                className="form-select block w-full text-sm mt-2 border"
                placeholder="Jawaban benar"
                onChange={(e) => setCorrectAnswer(e.target.value)}
                value={correctAnswer}
              >
                <option value="" disabled>
                  --Pilih Jawaban--
                </option>
                {answers.map((ans, index) => (
                  <option key={index} value={ans}>
                    {ans}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-right">
            <input
              type="submit"
              value="Submit"
              className="mt-6 bg-green-600 hover:bg-green-500 text-white cursor-pointer rounded-md font-semibold py-3 px-6"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddQuiz;
