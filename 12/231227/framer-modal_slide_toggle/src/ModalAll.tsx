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

//slide

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Box = styled(motion.div)`
  height: 400px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Grid = styled.div`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const OverLay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Modal() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);
  const toggle = () => setClicked((prev) => !prev);
  const boxLength = [1, 2, 3, 4];
  const overlay = {
    start: {
      opacity: 0,
      background: "rgba(0,0,0,0)",
    },
    animate: {
      opacity: 1,
      background: "rgba(0,0,0,0.5)",
    },
    exits: {
      opacity: 0,
      background: "rgba(0,0,0,0)",
    },
  };
  return (
    <Wrapper onClick={toggle}>
      <Grid>
        {boxLength.map((item) => (
          <Box onClick={() => setId(item + "")} layoutId={item + ""} key={item}>
            {item}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <OverLay
            onClick={() => setId(null)}
            variants={overlay}
            initial="start"
            animate="animate"
            exit="exits"
          >
            <Box layoutId={id} style={{ width: "1400px", height: "800px" }} />
          </OverLay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Modal;
