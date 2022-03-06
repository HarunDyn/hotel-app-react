import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="loading">
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
    </div>
  );
}

export default Loading;
