import React, { useState } from "react";
import { postType } from "./postType";

function BooleanSurvey({ surveyData, setPostData, postData }) {
  const [id, setID] = useState(false);
  let clickedItem = id ? "survey-container clicked" : "survey-container";

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
        <button className="success">Evet</button>
        <button className="danger">Hayır</button>
      </div>
    </div>
  ) : null;
}

export default BooleanSurvey;
