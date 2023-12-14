import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={2} className="contact-items">
        <img
          width={80}
          src="https://i1.sndcdn.com/avatars-000373844735-9n06kq-t240x240.jpg"
          alt="unknown"
        />
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
