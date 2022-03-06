import React from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          style={{ height: "30rem" }}
          src="https://images.etstur.com/files/images/hotelImages/TR/95763/l/Granada-Luxury-Belek-Genel-257544.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Granada Luxury Belek</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-10"
          style={{ height: "30rem" }}
          src="https://i.neredekal.com/i/neredekal/60273c72ff3ffdca374bd3f1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Titanic Beach Lara</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          style={{ height: "30rem" }}
          src="https://i.neredekal.com/i/neredekal/60331ec8644a375968b35853"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Royal Seginus Hotel</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
