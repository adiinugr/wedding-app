import { useEffect, useState } from "react";
import axios from "axios";
import MathJax from "react-mathjax-preview";

import { useParams } from "react-router-dom";
import CustomHeader from "../../components/CustomHeader";

function HistoryDetail() {
  const [quizzes, setQuizes] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;
  const { testId } = useParams();

  useEffect(() => {
    async function getData() {
      const quizRes = await axios.get(`${API_URL}/quiz/${testId}`);
      if (quizRes.data.data.length > 0) {
        setQuizes(quizRes.data.data[0].quizzes);
      }
    }

    getData();
  }, [API_URL, testId]);

  return (
    <div className="w-full h-full p-4">
      <CustomHeader link="/dashboard/history">Detail History</CustomHeader>
      <div className="mt-4 mb-4 rounded-md p-3 page-height bg-white">
        {quizzes.map((quiz, index) => (
          <div key={quiz._id}>
            <div>Soal no {index + 1}:</div>
            <div>
              <MathJax math={quiz.question} />
            </div>
            <div className="mt-2 italic">Jawaban:</div>
            <div className="italic">{quiz.correctAnswer}</div>
            <hr className="mt-1 mb-3" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryDetail;
