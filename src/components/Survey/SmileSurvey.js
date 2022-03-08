import React, { useState } from "react";
import bir from "../../assets/images/bir.png";
import iki from "../../assets/images/iki.png";
import üç from "../../assets/images/üç.png";
import dört from "../../assets/images/dört.png";
import beş from "../../assets/images/beş.png";
import { postType } from "./postType";

function SmileSurvey({ surveyData, setPostData, setGlobal, global }) {
  const [id, setID] = useState(false);

  let clickedItem = id ? "survey-container clicked" : "survey-container";

  const handleSubmitSmile = (e) => {
    e.preventDefault();
    setGlobal(!global);
    const answer = e.target.alt;
    const answer_numeric = Number(e.target.id);
    if (id) {
      setPostData((prev) =>
        prev.filter((item) => item.survey_line_id !== surveyData.id)
      );
      let result = postType(
        surveyData.id,
        surveyData.question,
        surveyData.question_type,
        answer,
        answer_numeric
      );
      setPostData((prev) => [...prev, result]);
    } else {
      let result = postType(
        surveyData.id,
        surveyData.question,
        surveyData.question_type,
        answer,
        answer_numeric
      );
      setPostData((prev) => [...prev, result]);
      setID(true);
    }
    if (e.target.parentElement.className === "smile") {
      setTimeout(
        () => (e.target.parentElement.style.backgroundColor = "green"),
        0
      );
    }
  };

  return surveyData ? (
    <div className={clickedItem}>
      <p>{surveyData?.question}</p>
      <div
        onClick={handleSubmitSmile}
        style={{
          padding: "1rem",
        }}
      >
        <button
          className="smile"
          style={{
            backgroundColor: global ? "rgb(255,255,255)" : "rgb(254,254,254)",
          }}
        >
          <img
            src={bir}
            alt="Çok memnunum"
            id="10"
            className="smile-img"
            style={{
              width: "1.9rem",
              height: "1.9rem",
            }}
          />
        </button>
        <button
          className="smile"
          style={{
            backgroundColor: global ? "rgb(255,255,255)" : "rgb(254,254,254)",
          }}
        >
          <img
            src={iki}
            alt="Memnunum"
            id="8"
            className="smile-img"
            style={{
              width: "2.2rem",
              height: "2.2rem",
            }}
          />
        </button>
        <button
          className="smile"
          style={{
            backgroundColor: global ? "rgb(255,255,255)" : "rgb(254,254,254)",
          }}
        >
          <img src={üç} alt="Vasat" id="6" className="smile-img" />
        </button>
        <button
          className="smile"
          style={{
            backgroundColor: global ? "rgb(255,255,255)" : "rgb(254,254,254)",
          }}
        >
          <img
            src={dört}
            alt="Memnun değilim"
            id="4"
            className="smile-img"
          ></img>
        </button>
        <button
          className="smile"
          style={{
            backgroundColor: global ? "rgb(255,255,255)" : "rgb(254,254,254)",
          }}
        >
          <img
            src={beş}
            alt="Hiç memnun değilim"
            id="2"
            className="smile-img"
          ></img>
        </button>
      </div>
    </div>
  ) : null;
}

export default SmileSurvey;
