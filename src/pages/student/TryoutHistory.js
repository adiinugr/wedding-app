import { useEffect, useState } from "react";
import Moment from "react-moment";
import axios from "axios";

import Segmen from "../../assets/images/segmen.svg";
import CustomButton from "../../components/CustomButton";
import { getCurrentUser } from "../../services/authService";
import { Link } from "react-router-dom";

function TryoutHistory() {
  const [testHistory, setTestHistory] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function getData() {
      const user = await getCurrentUser();
      const res = await axios.get(`${API_URL}/testHistory/${user.data._id}`);

      if (res.data.data.length > 0) {
        setTestHistory(res.data.data[0].testHistory);
      }
    }

    getData();
  }, [API_URL]);
  return (
    <div className="flex flex-col-reverse md:flex-row w-full">
      <div className="md:w-1/2 rounded-md h-full p-4">
        {testHistory.length === 0 ? (
          <div className="bg-white p-4 rounded-md text-center">
            Belum ada riwayat history!
          </div>
        ) : (
          <div className="md:overflow-auto h-full">
            {testHistory.map((hist) => (
              <div
                key={hist._id}
                className="bg-white py-4 px-6 flex mb-3 justify-between items-center rounded-md"
              >
                <div className="flex flex-col flex-2 w-full">
                  <p className="font-semibold mb-1 uppercase text-green-800">
                    {hist.testTitle}
                  </p>
                  <div className="flex items-center text-gray-800 text-sm">
                    <div className="mr-3">
                      <Moment format="D MMM YYYY HH:MM:ss">{hist.date}</Moment>
                    </div>
                  </div>
                </div>
                <div className="text-xl font-medium text-green-700 flex-1  mx-8">
                  {hist.score}
                </div>
                <div className="w-40 ml-4 flex items-center flex-1 justify-center">
                  <Link to={`/dashboard/history/history-detail/${hist.testId}`}>
                    <CustomButton>Detail</CustomButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="md:w-1/2 rounded-md p-6 h-full flex flex-col">
        <div className="text-xl text-green-800 uppercase font-medium mb-2">
          Riwayat Try Out
        </div>
        <div className="mb-10">
          Cek history try out mu. Disitu kamu bisa lihat kunci jawabannya juga.
        </div>
        <img src={Segmen} width={400} height={400} alt="segmen" />
      </div>
    </div>
  );
}

export default TryoutHistory;
