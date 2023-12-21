import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
`;

interface props {
  label: string;
  onDelete?: () => void;
}

const Todoitem = ({ label, onDelete }: props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button onClick={onDelete} label="Delete" />
    </Container>
  );
};

export default Todoitem;
