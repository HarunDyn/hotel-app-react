import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthProvider";
import Personal from "../components/Guest/Personal";
import Room from "../components/Guest/Room";
import Loyalty from "../components/Guest/Loyalty";
import Loading from "../components/Loading";

function Guest() {
  const [data, setData] = useState("");
  const { auth } = useContext(AuthContext);
  const token = auth.accesToken;
  const url = "https://www.icibot.net/v2/api/app_me";

  const getData = async (url, token) => {
    let res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(res.data);
  };

  useEffect(() => {
    getData(url, token);
  }, [token]);

  return data ? (
    <div
      className="guestContainer"
      style={{
        padding: "3rem",
        width: "90vw",
        margin: "auto",
        fontWeight: "600",
      }}
    >
      <br />
      <Personal data={data} />
      <br />
      <br />
      <Room data={data} />
      <br />
      <br />
      <Loyalty data={data} />
    </div>
  ) : (
    <Loading />
  );
}

export default Guest;
