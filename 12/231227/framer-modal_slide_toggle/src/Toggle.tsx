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

//toggle

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;
const Button = styled.button`
  position: absolute;
  top: 250px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #fff;
  color: #888;
  &:hover {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
`;
function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };
  const boxVariants = {
    start: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 360,
    },
    leaving: {
      opacity: 0,
      y: 20,
    },
  };
  return (
    <Wrapper>
      <Button onClick={toggleShowing}>Click</Button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="start"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
