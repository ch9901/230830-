import "./App.css";
import Box from "./Box";
import { useState } from "react";
import { gameimg } from "./util";

const choice = {
  scissors: {
    name: "scissors",
    img: gameimg("scissors"),
  },
  rock: {
    name: "rock",
    img: gameimg("rock"),
  },
  paper: {
    name: "paper",
    img: gameimg("paper"),
  },
};

function App() {
  //버튼을 눌렀을 때 상태에 따라 box컴포넌트의 이미지가 바뀌게 하기 위해
  const [userSelect, setUserSelect] = useState({});
  const [computerSelect, setComputer] = useState({});

  //result 값을 변화시키는 useState() 초기에는 아무런 스자가 없으니까 빈 문자열을 초기값으로
  const [result, setResult] = useState("");

  //버튼을 눌렀을 때 작동하는 함수
  const ranChoice = () => {
    //Obect.keys() -> 객체의 키 값만 뽑아와서 배열로 바꿔줌
    let itemArray = Object.keys(choice);
    let ranItem = Math.floor(Math.random() * 3);
    let final = itemArray[ranItem];
    // console.log(final);
    return choice[final];
  };

  //user == computer >> tie

  //user == rock, computer == scissors >> user win
  //user == scissors, computer == paper >> user win
  //user == paper, computer == rock >> user win

  //user == rock, computer == paper >> user lose
  //user == scissors, computer == rock >> user lose
  //user == paper, computer == scissors >> user lose
  const judgement = (user, computer) => {
    console.log(user, computer);
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "scissors" ? "win" : "lose";
    }
  };

  const play = (userChoice) => {
    // console.log(`선택된 요소 :${e}`);
    // console.log(choice[userChoice]);
    setUserSelect(choice[userChoice]);
    //내가 플레이를 눌렀을 때 랜덤함수 실행되게
    let computerChoice = ranChoice();
    setComputer(computerChoice);
    //result 값으로 전달하기 위해 한 번 더 감쌌음
    setResult(judgement(choice[userChoice], computerChoice));
  };

  return (
    <div className="App">
      <div className="main">
        {/* 내가선택 
        title 값을 전달, 선택된 요소가 무엇인지 알려주기위해 useState로 잡아온 userSelect값을 전달함
        */}
        <Box title="🙋🏻You" item={userSelect} result={result} />
        {/* 컴퓨터가선택 */}
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        {/* 이벤트핸들러는 CSR방식이기 때문에 렌더링 될때만 실행된다. 그러므로 클릭 시 실행할 수 있게 하도록 하기위해서는 콜백으로 실행시켜야한다. */}
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("scissors")}>Scissors</button>
        <button onClick={() => play("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;
