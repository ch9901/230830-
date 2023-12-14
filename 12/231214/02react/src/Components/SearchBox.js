import React from "react";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState();
  const changeKeyword = (event) => {
    setKeyword(event.target.value);
  };
  const dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({
      type: "SEARCH_USERNAME",
      payload: { keyword },
    });

  };
  return (
    <Form onSubmit={searchByName}>
      <Row className="searchbox">
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={changeKeyword}
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
