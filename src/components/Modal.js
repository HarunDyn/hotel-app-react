import React from "react";
import { useNavigate } from "react-router-dom";

function Modal({ resultData, setShow }) {
  const success = resultData.survey_result > 7;
  let colorbg = success ? "#0bc0ee" : "#e1f103";
  const navigate = useNavigate();

  return (
    <div className="modal-bg" style={{ backgroundColor: colorbg }}>
      <div className="modal-container">
        <div className="close-button">
          <button
            onClick={() => {
              setShow(false);
              navigate("/");
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>{resultData.hotel_name} Hotel</h3>
        </div>
        <div className="body">
          {resultData.survey_result > 7
            ? resultData.survey_header.thanks_message_for_positive_reviews
            : resultData.survey_header.thanks_message_for_negative_reviews}
        </div>
        <div className="link" style={{ display: success ? "block" : "none" }}>
          <a href={resultData.survey_header.positive_redirect_urls}>
            Yorum bırakın
          </a>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setShow(false);
              navigate("/");
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
