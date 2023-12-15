import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authenticateAction } from "../redux/actions/authenticateAction";
import { useSelector } from "react-redux";
//리액트 부트스트랩 사이트 왼편 메뉴에 form > overview > return 값 안에있는거 그대로 복사붙여넣기
//
const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trueOk = useSelector((state) => state.auth.authenticate);
  const loginUser = (e) => {
    // console.log(trueOk);
    //서버로 보내고자 하는걸 막기위해
    e.preventDefault();
    //버튼을 누르면 로그인이 됐다고 판단하여 true로 바꿔준다.
    // setAuthenticate(true);
    //redux thunk 하려고 없앰
    dispatch(authenticateAction.login(id, password));
    //이거해야 true 값 전달되므로 꼭 필요!!
    setAuthenticate(trueOk);
    //로그인이 됐다고 판단했으니 메인페이지로 넘어가게
    navigate("/");
  };
  const idChange = (event) => {
    setId(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={idChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={passwordChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
