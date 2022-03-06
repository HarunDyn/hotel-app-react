import React from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function Loyalty({ data }) {
  const { loyalty_info } = data;

  return data ? (
    <Card style={{ width: "100%", margin: "auto", marginBottom: "2rem" }}>
      <Card.Title style={{ textAlign: "center", marginTop: "1rem" }}>
        Loyalty Card
      </Card.Title>
      <Card.Body style={{ display: "flex" }}>
        <Row md={1} className="g-2" style={{ width: "80vw" }}>
          <Col>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-photo/businessman-hold-3d-plus-icon-man-hold-hand-offer-positive-thing-such-as-profit-benefits-development-csr-represented-by-plus-signthe-hand-shows-plus-sign_150455-18352.jpg"
              style={{ width: "100%", height: "17rem" }}
            />
          </Col>
          <Col>
            <ListGroup className="list-group-flush" style={{ width: "100%" }}>
              <ListGroupItem>
                Points: {loyalty_info.points_earned}{" "}
              </ListGroupItem>
              <ListGroupItem>
                Spent Points : {loyalty_info.points_spend}
              </ListGroupItem>
              <ListGroupItem>
                Remaining Points : {loyalty_info.remaining_point}
              </ListGroupItem>
              <ListGroupItem>
                Overnight Stay : {loyalty_info.overnight_stay}
              </ListGroupItem>
              <ListGroupItem>
                Night Stay : {loyalty_info.target_night_stay}
              </ListGroupItem>
              <ListGroupItem>
                Earned Night Stay : {loyalty_info.earned_night_stay}
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  ) : null;
}

export default Loyalty;
