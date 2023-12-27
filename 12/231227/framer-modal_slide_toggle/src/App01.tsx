import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
const Wrapper = styled(motion.div)`
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
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

function App() {
  const x = useMotionValue(0);
  const t = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg,rgb(0,210,238), rgb(0,83,238))",
      "linear-gradient(135deg,rgb(238,0,153), rgb(221,0,238))",
      "linear-gradient(135deg,rgb(0,228,155), rgb(238,178,0))",
    ]
  );

  // useEffect(() => {
  //   t.on("change", () => {
  //     console.log(t.get());
  //   });
  // }, [x]);

  return (
    <Wrapper style={{ background: gradient }}>
      <button onClick={() => x.set(200)}>Click me</button>
      <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
