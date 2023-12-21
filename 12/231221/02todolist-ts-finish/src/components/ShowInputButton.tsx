import React from "react";
import Button from "./Button";
import styled from "styled-components";

interface props {
  show: boolean;
  onClick: () => void;
}

const Container = styled.div`
  position: absolute;
  right: 80px;
  bottom: 80px;
  z-index: 1;
`;
const ShowInputButton = ({ show, onClick }: props) => {
  return (
    <Container>
      <Button
        label={show ? "닫기" : "할 일 추가"}
        color={show ? "undefined" : "dodgerblue"}
        onClick={onClick}
      />
    </Container>
  );
};

export default ShowInputButton;
