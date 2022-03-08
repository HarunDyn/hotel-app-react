import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { GrStatusInfo } from "react-icons/gr";
import { MdCelebration } from "react-icons/md";
import { FcManager, FcTwoSmartphones } from "react-icons/fc";
import { FaHome, FaBirthdayCake } from "react-icons/fa";
function Personal({ data }) {
  let {
    id,
    first_name,
    last_name,
    locale,
    phone_no,
    date_of_birth,
    e_mail,
    wedding_anniversary,
    profile_pic_url,
  } = data;

  return data ? (
    <Card
      style={{ width: "100%", margin: "auto", boxShadow: "3px 3px 10px #000" }}
    >
      <Card.Img
        variant="top"
        src={profile_pic_url}
        style={{ width: "10rem", margin: "auto", borderRadius: "50%" }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>
          Guest Information
          <GrStatusInfo style={{ margin: "4" }} />
        </Card.Title>
        <Card.Text
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <span>
            {" "}
            <strong className="box">Fullname: </strong>
            {first_name} {last_name}
          </span>
          {e_mail}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <FcManager className="iconPersonal" />
          <span className="box">Guest id:</span> {id}
        </ListGroupItem>
        <ListGroupItem>
          <FaHome className="iconPersonal" />
          <span className="box">Locale : </span>
          {locale}
        </ListGroupItem>
        <ListGroupItem>
          <FcTwoSmartphones className="iconPersonal" />
          <span className="box">Phone No :</span> {phone_no}
        </ListGroupItem>
        <ListGroupItem>
          <FaBirthdayCake className="iconPersonal" />
          <span className="box">birth :</span> {date_of_birth.slice(0, 10)}
        </ListGroupItem>
        <ListGroupItem>
          <MdCelebration className="iconPersonal" />
          <span className="box">wedding :</span>{" "}
          {wedding_anniversary.slice(0, 10)}
        </ListGroupItem>
      </ListGroup>
    </Card>
  ) : null;
}

export default Personal;
