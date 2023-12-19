import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ResultData } from "../contents/data/resultdata";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;

const Header = styled.div`
  font-size: 35px;
  color: #fff;
  width: 100%;
  height: 15vh;
  background: #ffa07a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
const LogoImage = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px 0;
`;
const Desc = styled.div`
  width: 40%;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
`;

const Result = () => {
  const [searchParams] = useSearchParams();
  const [resultData, setResultData] = useState({});
  const mbti = searchParams.get("mbti");
  console.log(mbti);
  const navigate = useNavigate();
  const HandleClickButton = () => {
    navigate("/");
  };
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);
  return (
    <Container>
      <Header>예비집사 판별기</Header>
      <Wrapper>
        <Title>{mbti}</Title>
        <LogoImage>
          <img
            src={resultData.image}
            alt=""
            width={300}
            height={300}
            className="rounded-circle"
          />
        </LogoImage>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는 {resultData.best}형 {resultData.name}
          입니다🐱
        </Desc>
        <Desc>{resultData.desc}</Desc>
        <Button className="btn-danger" onClick={HandleClickButton}>
          테스트 다시하기
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Result;
