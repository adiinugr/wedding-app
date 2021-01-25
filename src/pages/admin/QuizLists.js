import { Table } from "antd";
import { useEffect, useState } from "react";
import MathJax from "react-mathjax-preview";
import axios from "axios";

import CustomHeader from "../../components/CustomHeader";
import CustomAlert from "../../components/CustomAlert";
import { Link, useParams } from "react-router-dom";
import authHeader from "../../services/authHeader";

export default function QuizLists() {
  const [quizes, setQuizes] = useState([]);
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);

  const { testId } = useParams();
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${API_URL}/quiz/${testId}`);

      if (res.data.data.length > 0) {
        setQuizes(res.data.data[0].quizzes);
      }
    }

    getData();
  }, [message, API_URL, testId]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/quiz/delete/${testId}/${id}`, {
        headers: authHeader(),
      });

      setMessage(res.data.message);
      setMessageStatus(res.data.status);
    } catch (error) {
      setMessage(error.message);
      setMessageStatus(400);
    }
  };

  const columns = [
    {
      title: "Nomor",
      dataIndex: "number",
      key: "number",
      width: 200,
    },
    {
      title: "Pertanyaan",
      dataIndex: "question",
      key: "question",
      width: 400,
      render: (text, record) => <MathJax math={record.question} />,
    },
    {
      title: "Action",
      key: "action",
      width: 300,
      render: (text, record) => (
        <div className="flex items-center">
          <Link to={`/dashboard/test/quiz-edit/${testId}/${record._id}`}>
            <button
              className="
        bg-green-500 text-white px-3 py-2  rounded-lg hover:bg-green-600 focus:outline-none active:bg-green-700 mr-2"
            >
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(record._id)}
            className="
        bg-red-500 text-white px-3 py-2  rounded-lg hover:bg-red-600 focus:outline-none active:bg-red-700 mr-2"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full m-4">
      <CustomHeader link="/dashboard/test">Daftar Try Out</CustomHeader>
      <div className="mt-3">
        {message && (
          <CustomAlert
            message={message}
            messageStatus={messageStatus}
            setMessage={() => setMessage(null)}
          />
        )}
      </div>
      <div className="mx-auto mt-3">
        <div className="text-right mb-3">
          <Link to={`/dashboard/test/add-quiz/${testId}`}>
            <button
              className="
            bg-blue-500 text-white px-3 py-2  rounded-lg hover:bg-blue-600 focus:outline-none active:bg-blue-700"
            >
              Tambah
            </button>
          </Link>
        </div>
        <Table
          rowKey={(record) => record._id}
          columns={columns}
          dataSource={quizes}
          pagination={{ pageSize: 4 }}
        />
      </div>
    </div>
  );
}
