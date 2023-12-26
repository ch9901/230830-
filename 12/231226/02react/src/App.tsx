import React from "react";
import "./App.css";
import styled from "styled-components";
import { motion } from "framer-motion";
const Wrapper = styled.div`
  width: 98.7vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
// };
const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.3);
  place-self: center;
`;
const boxVars = {
  start: { opacity: 0, scale: 0.5, y: -200 },
  end: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const circleVariants = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    scale: 1.2,
  },
};
function App() {
  return (
    <Wrapper>
      {/* <Box variants={myVars} initial="start" animate="end" /> */}
      <Box variants={boxVars} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
