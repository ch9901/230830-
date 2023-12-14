import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //input값을 store에 보내고자
  const dispatch = useDispatch();

  //name input onChange 작동되면 실행되는 함수
  const getName = (event) => {
    setName(event.target.value);

    console.log("work-getname");
  };

  //number input onChange 작동되면 실행되는 함수
  const getNumber = (event) => {
    setPhoneNumber(event.target.value);
    console.log("get number");
  };
  //submit 버튼이 눌렸을 때의 form태그의 행동
  const addContact = (event) => {
    //서버로 보내고자하는 행동 방지
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={getName}
          />
          <Form.Text className="text-muted">
            We'll never share your contact with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Contact number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Contact number"
            onChange={getNumber}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
