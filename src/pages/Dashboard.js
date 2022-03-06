import React from "react";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import HolidayPic from "../components/HolidayPic";
const urlHoliday = [
  "https://i.pinimg.com/originals/aa/de/10/aade102613cb09d48e31b5da94274990.jpg",
  "https://content.tui.co.uk/adamtui/2017_11/4_9/60ed1de8-ef33-4ed3-a234-a821009b2123/ACC_051066_TUR_14WebOriginalCompressed.jpg?i10c=img.resize(width:658);img.crop(width:658%2Cheight:370)",
  "https://www.almond-holidays.com/wp-content/uploads/2021/02/The-Pergola-Restaurant-at-The-Almond.jpg",
  "http://www.directtraveller.com/hotel_images/Bellapais-Gardens-North-Cyprus-Outdoor-Area-at-the-Bellapais-Gardens-e6fKWr.jpg",
  "https://www.bellapaisgardens.com/wp-content/uploads/2019/10/rest-800x720.jpg",
  "https://happydaysholiday.com/en/images/catalogue.jpg",
];
function Dashboard() {
  return (
    <>
      <Slider />
      <div className="holiday__items">
        {urlHoliday.map((url, index) => (
          <HolidayPic key={index} url={url} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
