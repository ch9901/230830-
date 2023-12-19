import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../contents/data/questiondata";
import { useNavigate, createSearchParams } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 30px;
  width: 80%;
`;

const Question = () => {
  const navigate = useNavigate();
  //문항 세개가 도달했다는 상태 파악위함
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    {
      id: "EI",
      score: 0,
    },
    {
      id: "SN",
      score: 0,
    },
    {
      id: "TF",
      score: 0,
    },
    {
      id: "JP",
      score: 0,
    },
  ]);
  //어떠한 버튼이 눌리고 해당 인자값으로 인해 연산작업 시작
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setQuestionNo(questionNo + 1);
    setTotalScore(newScore);

    //문제가 다 제시 된다면 result 페이지로 넘어가게~
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acculate, current) =>
          acculate +
          (current.score >= 2
            ? current.id.substring(0, 1)
            : current.id.substring(1, 2)),
        ""
      );
      console.log(mbti);
      //useNavigate의 또 다른 기능 >> 경로 + alpha > createSearchParams
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
      />
      <Container>
        <Title>🐱{QuestionData[questionNo].title}🤔</Title>
        <ButtonGroup>
          <Button
            onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
            className="btn-danger"
            style={{ width: "30%", fontSize: "20px", height: "200px" }}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
            className="btn-danger"
            style={{ width: "30%", fontSize: "20px", height: "200px" }}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
};

export default Question;
