import { Table } from "antd";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import axios from "axios";

import CustomHeader from "../../components/CustomHeader";
import CustomAlert from "../../components/CustomAlert";
import { Link } from "react-router-dom";
import authHeader from "../../services/authHeader";

export default function TestList() {
  const [tests, setTests] = useState([]);
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${API_URL}/test`);
      setTests(res.data.data);
    }

    getData();
  }, [message, API_URL]);

  const handleDelete = async (id) => {
    const res = await axios.delete(`${API_URL}/test/delete/${id}`, {
      headers: authHeader(),
    });

    setMessage(res.data.message);
    setMessageStatus(res.data.status);
  };

  const columns = [
    {
      title: "Judul",
      dataIndex: "title",
      key: "title",
      width: 200,
    },
    {
      title: "Deskripsi",
      dataIndex: "desc",
      key: "desc",
      width: 400,
    },
    {
      title: "Tanggal",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text, record) => (
        <Moment format="D MMM YYYY">{record.createdAt}</Moment>
      ),
    },

    {
      title: "Action",
      key: "action",
      width: 300,
      render: (text, record) => (
        <div className="flex items-center">
          <Link to={`/dashboard/test/edit/${record._id}`}>
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
          <Link to={`/dashboard/test/quiz-list/${record._id}`}>
            <button
              className="
        bg-yellow-500 text-white px-3 py-2  rounded-lg hover:bg-yellow-600 focus:outline-none active:bg-yellow-700"
            >
              Edit Soal
            </button>
          </Link>
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
          <Link to="/dashboard/test/add">
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
          dataSource={tests}
          pagination={{ pageSize: 4 }}
          scroll={{ x: 100 }}
        />
      </div>
    </div>
  );
}
