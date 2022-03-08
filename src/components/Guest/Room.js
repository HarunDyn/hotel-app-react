import React from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function Room({ data }) {
  let {
    hotel_id,
    room_no,
    entry_date,
    release_date,
    booking_date,
    pillow_type,
    bed_type,
  } = data;

  return data ? (
    <>
      <Card
        style={{
          width: "100%",
          margin: "auto",
          boxShadow: "1px 1px 3px #000",
        }}
      >
        <Card.Body style={{ display: "flex" }}>
          <Row xs={1} md={1} className="g-4" style={{ width: "100vw" }}>
            <Col>
              <Card.Img
                variant="top"
                src="http://www.bedbreakfast.ee/wp-content/uploads/2016/10/hotel-room.jpg"
                style={{ width: "100%", height: "24rem" }}
              />
            </Col>
            <Col>
              <ListGroup className="list-group-flush" style={{ width: "80%" }}>
                <ListGroupItem>
                  <span className="box">Hotel ID :</span> {hotel_id}{" "}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="box">Room No : </span>
                  {room_no}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="box">Booking Date :</span>{" "}
                  {booking_date.slice(0, 10)}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="box">Release Date :</span>{" "}
                  {release_date.slice(0, 10)}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="box">Entry Date :</span>{" "}
                  {entry_date.slice(0, 10)}
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row
        xs={1}
        md={2}
        className="g-1"
        style={{ width: "80vw", margin: "auto" }}
      >
        <Col>
          <Card style={{ boxShadow: "3px 3px 5px #000", marginTop: "2rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "15rem" }}
              src="https://media-cdn.tripadvisor.com/media/photo-s/0e/3b/ab/b2/sandton-hotel-de-filosoof.jpg"
            />
            <Card.Body>
              <Card.Title>{pillow_type} Pillows</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ boxShadow: "3px 3px 5px #000", marginTop: "2rem" }}>
            <Card.Img
              variant="top"
              style={{ height: "15rem" }}
              src="http://www.whotelsthestore.com/images/products/lrg/w-hotels-lexington-bed-WHO-800-01-00-GY_lrg.jpg"
            />
            <Card.Body>
              <Card.Title>{bed_type} Bed</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  ) : null;
}

export default Room;
