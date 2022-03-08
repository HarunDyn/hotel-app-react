import React, { useState } from "react";
import { postType } from "./postType";

function BooleanSurvey({ surveyData, setPostData, postData }) {
  const [id, setID] = useState(false);
  let clickedItem = id ? "survey-container clicked" : "survey-container";
  let bgBut = postData?.filter((item) => item.survey_line_id === surveyData.id);
  let bg_e;
  let bg_h;
  if (bgBut[0]?.answer === "Evet") {
    bg_e = " #0bc0ee";
    bg_h = "white";
  } else if (bgBut[0]?.answer === "Hayır") {
    bg_e = "white";
    bg_h = "#e1f103";
  }

  const handleBooleanSurvey = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Evet") {
      if (id) {
        setPostData((prev) =>
          prev.filter((item) => item.survey_line_id !== surveyData.id)
        );
        let result = postType(
          surveyData.id,
          surveyData.question,
          surveyData.question_type,
          "Evet",
          10
        );
        setPostData((prev) => [...prev, result]);
      } else {
        let result = postType(
          surveyData.id,
          surveyData.question,
          surveyData.question_type,
          "Evet",
          10
        );
        setPostData((prev) => [...prev, result]);
        setID(true);
      }
    }

    if (e.target.innerText === "Hayır") {
      if (id) {
        setPostData((prev) =>
          prev.filter((item) => item.survey_line_id !== surveyData.id)
        );
        let result = postType(
          surveyData.id,
          surveyData.question,
          surveyData.question_type,
          "Hayır",
          0
        );
        setPostData((prev) => [...prev, result]);
      } else {
        let result = postType(
          surveyData.id,
          surveyData.question,
          surveyData.question_type,
          "Hayır",
          0
        );
        setPostData((prev) => [...prev, result]);
        setID(true);
      }
    }
  };

  return surveyData ? (
    <div className={clickedItem}>
      <p>{surveyData?.question}</p>
      <div onClick={handleBooleanSurvey}>
        <button className="success" style={{ backgroundColor: `${bg_e}` }}>
          Evet
        </button>
        <button className="danger" style={{ backgroundColor: `${bg_h}` }}>
          Hayır
        </button>
      </div>
    </div>
  ) : null;
}

export default BooleanSurvey;
