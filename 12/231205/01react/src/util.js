import emotion1 from "./content/emotion1.png";
import emotion2 from "./content/emotion2.png";
import emotion3 from "./content/emotion3.png";
import emotion4 from "./content/emotion4.png";
import emotion5 from "./content/emotion5.png";

export const getEmotionById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

//emotion img refactoring
export const emotionList = [
  {
    id: 1,
    name: "최고",
    img: getEmotionById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionById(2),
  },
  {
    id: 3,
    name: "보통",
    img: getEmotionById(3),
  },
  {
    id: 4,
    name: "별로",
    img: getEmotionById(4),
  },
  {
    id: 5,
    name: "최악",
    img: getEmotionById(5),
  },
];

//새로고침하면 초기값 설정
export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
