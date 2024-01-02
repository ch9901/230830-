import React from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { minuteState, hourSelector } from "./components/Atoms";

function App() {
  // 구조분해할당으로 useRecoilState(atoms에 선언한 key)
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    //원래 문자열임 .. event.currenTarget.value는 문자열로 인식된다 그렇게 되면 우리가 minuteState에 저장한 number값과 달라서 오류발생 >> 앞에 + 넣어주면 number값으로 형변환이 된다
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
