import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
  background: ${(props) => props.theme.background};
`;
//as >> 해당 컴포넌트 안에 원하는 속성이름을지정하게 해주는 키워드
//<Box as="a"/>

const Input = styled.input.attrs({ required: true })`
  background: gray;
`;

const rotationAnimation = keyframes`
0%{
transform:rotate(0deg);
border-radius:0%;
} 
50%{
  transform:rotate(30deg);
  border-radius:50%;
}
100%{
  transform:rotate(0deg);
  border-radius:0%
}
`;

const Emoji = styled.span`
  font-size: 30px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    font-size: 30px;
    transition: 0.5s;
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      {/* <Box>
        <Emoji>🐱🐱</Emoji>
      </Box>
      <Emoji>👻</Emoji> */}
      <Title>안녕</Title>
    </Container>
  );
}
export default App;
