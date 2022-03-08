import React, { useState } from "react";
import { postType } from "./postType";

function NpsSurvey({ surveyData, setPostData }) {
  const [id, setID] = useState(false);
  const [global, setGlobal] = useState(true);
  let clickedItem = id ? "survey-container clicked" : "survey-container";

  const handleNpsSurvey = (e) => {
    e.preventDefault();
    setGlobal(!global);
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
    setTimeout(
      () =>
        (e.target.style.backgroundColor =
          answer_numeric > 5 ? "#0bc0ee" : "#e1f103"),
      0
    ); // :)
  };

  return surveyData ? (
    <div className={clickedItem}>
      <p>{surveyData?.question}</p>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Button
            value={item}
            key={item}
            global={global}
            handleNpsSurvey={handleNpsSurvey}
          />
        ))}
      </div>
    </div>
  ) : null;
}

function Button({ global, value, handleNpsSurvey }) {
  return (
    <button
      className={value > 5 ? `nps ${value}` : `nps-danger ${value}`}
      onClick={handleNpsSurvey}
      style={{ backgroundColor: global ? "#fff" : " #fff" }}
    >
      {value}
    </button>
  );
}

export default NpsSurvey;
