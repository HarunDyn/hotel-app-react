import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import BooleanSurvey from "../components/Survey/BooleanSurvey";
import NpsSurvey from "../components/Survey/NpsSurvey";
import SmileSurvey from "../components/Survey/SmileSurvey";
import AuthContext from "../context/AuthProvider";
import Modal from "../components/Modal";
import Loading from "../components/Loading";

function Survey() {
  const [show, setShow] = useState(false);
  const [surveyData, setSurveyData] = useState("");
  const [postData, setPostData] = useState([]);
  const [resultData, setResultData] = useState({});
  const { auth } = useContext(AuthContext);

  const url = "https://www.icibot.net/v2/api/main_survey/24";
  const urlPost = "https://www.icibot.net/v2/api/survey_answer";
  const token = auth?.accesToken;

  const getData = async (url, token) => {
    let res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setSurveyData(res.data);
  };

  const handleSubmitSurvey = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        urlPost,
        JSON.stringify({
          survey_answers: postData,
          note: "Harika bir tatildi çok teşekkür ederiz..",
        }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResultData(res.data);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      getData(url, token);
    }
  }, [token]);

  return surveyData ? (
    <div className="surveyContainer">
      <h3>Guest Satisfaction Survey</h3>
      <form action="#">
        {surveyData?.survey_lines.map((item) => {
          if (item.question_type === "boolean") {
            return (
              <BooleanSurvey
                key={item.id}
                surveyData={item}
                postData={postData}
                setPostData={setPostData}
              />
            );
          } else if (item.question_type === "nps") {
            return (
              <NpsSurvey
                key={item.id}
                surveyData={item}
                postData={postData}
                setPostData={setPostData}
              />
            );
          } else {
            return (
              <SmileSurvey
                key={item.id}
                surveyData={item}
                postData={postData}
                setPostData={setPostData}
              />
            );
          }
        })}
      </form>

      <button
        type="submit"
        className="post-button"
        onClick={handleSubmitSurvey}
      >
        Send
      </button>
      {show && <Modal resultData={resultData} setShow={setShow} />}
    </div>
  ) : (
    <Loading />
  );
}

export default Survey;
