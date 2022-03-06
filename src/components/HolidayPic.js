import React from "react";
import { FaFacebook, FaEye } from "react-icons/fa";
function HolidayPic({ url }) {
  return (
    <div className="holiday__item">
      <img src={url} alt="Holiday" />
      <div className="holiday__btns">
        <a href="#!" className="holiday__btn">
          <FaEye /> Preview
        </a>
        <a href="#!" className="holiday__btn">
          <FaFacebook /> Facebook
        </a>
      </div>
    </div>
  );
}

export default HolidayPic;
