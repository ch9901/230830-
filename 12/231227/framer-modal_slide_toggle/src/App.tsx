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
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 40px;
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

const boxVars01 = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    transition: {
      duration: 3,
    },
  },
};

function App() {
  return (
    <Wrapper>
      {/* <Box variants={myVars} initial="start" animate="end" /> */}
      {/* <Circle variants={circleVariants} /> */}
      <BiggerBox>
        <Box
          variants={boxVars01}
          whileHover="hover"
          whileTap="click"
          // drag="x"
          drag
          dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
          whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
