import { useState } from "react";

function Body() {
  const [name, setName] = useState("");
  function onChangeName(e) {
    setName(e.target.value);
    console.log(name);
  }

  const [gender, setGender] = useState("");
  function onChangeGender(e) {
    console.log(gender);
    console.log(e.target.value);
    setGender(e.target.value);
  }
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
      </div>
      <div>
        <select value={gender} onChange={onChangeGender}>
          <option key={""}>성별선택</option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
        <div>{gender}</div>
      </div>
      <div>
        <input type="date" />
      </div>
      <div>
        <textarea />
      </div>
    </div>
  );
}

export default Body;
