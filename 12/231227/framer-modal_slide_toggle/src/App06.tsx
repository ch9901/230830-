import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { setConstantValue } from "typescript";

//slide

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #00a5ff;
  // border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  //눌러지면 기존 값을 반대값으로 바꿔주세용
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box
      // style={{
      //   justifyContent: clicked ? "center" : "flex-start",
      //   alignItems: clicked ? "center" : "flex-start",
      // }}
      >
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
        {/* clicked의 boolean 값에 따라 보였다 안보였다 설정
           레이아웃 넣었더니 왔다갔다거림 .. >>하나의 id 값ㅇ르 부여해서 하나야~ 라고 설정해주는거임~!*/}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}{" "}
      </Box>
    </Wrapper>
  );
}

export default App;
