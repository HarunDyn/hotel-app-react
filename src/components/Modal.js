import React from "react";
import { useNavigate } from "react-router-dom";

function Modal({ resultData, setShow }) {
  const success = resultData.survey_result > 7;
  let colorbg = success
    ? "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)"
    : "radial-gradient(circle farthest-side, #fceabb, #f8b500)";
  const navigate = useNavigate();

  return (
    <div className="modal-bg" style={{ background: colorbg }}>
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

        <div className="footer">
          <button
            style={{
              display: success ? "block" : "none",
              backgroundColor: "#0bc0ee",
            }}
            className="urlButton"
          >
            <a
              href={resultData.survey_header.positive_redirect_urls}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Comment
            </a>
          </button>
          <button
            onClick={() => {
              setShow(false);
              navigate("/");
            }}
            id="cancelBtn"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
