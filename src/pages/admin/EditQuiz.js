import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import authHeader from "../../services/authHeader";

import CustomAlert from "../../components/CustomAlert";
import CustomHeader from "../../components/CustomHeader";
import TinyMceEditor from "../../components/TinyMceEditor";

function EditQuiz() {
  const [number, setNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);

  const { testId, quizId } = useParams();
  const history = useHistory();
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function getData() {
      try {
        const res = await axios.get(`${API_URL}/quiz/${testId}/${quizId}`, {
          cancelToken: source.token,
        });
        const { number, question, answers, correctAnswer } = res.data.data;

        setNumber(number);
        setQuestion(question);
        setAnswers(answers);
        setCorrectAnswer(correctAnswer);
      } catch (error) {
        if (axios.isCancel(error)) {
          setMessage(error);
        } else {
          throw error;
        }
      }
    }

    getData();

    return () => {
      source.cancel();
    };
  }, [message, API_URL, testId, quizId]);

  const handleAnswerChange = (index, event) => {
    const values = [...answers];
    values[index] = event.target.value;
    setAnswers(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { number, question, answers, correctAnswer };

    const res = await axios.put(
      `${API_URL}/quiz/update/${testId}/${quizId}`,
      data,
      {
        headers: authHeader(),
      }
    );

    setMessage(res.data.message);
    setMessageStatus(res.data.status);

    history.push(`/dashboard/test/quiz-list/${testId}`);
  };

  return (
    <div className="w-full m-4">
      <CustomHeader link={`/dashboard/test/quiz-list/${testId}`}>
        Edit Soal
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
              <div className="grid grid-cols-2 gap-2 ">
                {answers.map((ans, index) => (
                  <input
                    key={index}
                    type="text"
                    className="border p-2 w-full text-sm "
                    placeholder={`Jawaban ${index + 1}`}
                    onChange={(event) => handleAnswerChange(index, event)}
                    value={ans}
                  />
                ))}
              </div>

              <select
                className="form-select block text-sm w-full mt-2 border"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              >
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

export default EditQuiz;
