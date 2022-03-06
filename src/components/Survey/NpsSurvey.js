import React, { useState } from "react";
import { postType } from "./postType";

function NpsSurvey({ surveyData, setPostData, postData }) {
  const [id, setID] = useState(false);
  let clickedItem = id ? "survey-container clicked" : "survey-container";

  const handleNpsSurvey = (e) => {
    e.preventDefault();
    const answer = e.target.innerText;
    const answer_numeric = Number(e.target.innerText);
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
  };

  return surveyData ? (
    <div className={clickedItem}>
      <p>{surveyData?.question}</p>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Button value={item} key={item} handleNpsSurvey={handleNpsSurvey} />
        ))}
      </div>
    </div>
  ) : null;
}

function Button({ value, handleNpsSurvey }) {
  return (
    <button
      className={value > 5 ? "nps" : "nps-danger"}
      onClick={handleNpsSurvey}
    >
      {value}
    </button>
  );
}

export default NpsSurvey;
