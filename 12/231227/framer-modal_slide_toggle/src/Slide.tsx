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
  gap: 10px;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: Dodgerblue;
  font-weight: 800;
  position: absolute;
  top: 350px;
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
  &.prev {
    right: 1000px;
  }
  &.next {
    left: 1000px;
  }
`;

function App() {
  const boxLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [visible, setVisible] = useState(1);
  //1부터 시작하니까 일단 기본값 false
  const [back, setBack] = useState(false);
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const box = {
    initial: (back: boolean) => ({
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exits: (back: Boolean) => ({
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.5 },
    }),
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        {boxLength.map((item) =>
          item === visible ? (
            <Box
              custom={back}
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
              key={item}
            >
              {item}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <Button className="prev" onClick={prevPlease}>
        PREV
      </Button>
      <Button className="next" onClick={nextPlease}>
        NEXT
      </Button>
    </Wrapper>
  );
}

export default App;
