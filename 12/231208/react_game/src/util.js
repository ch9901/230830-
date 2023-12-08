import rock from "./contents/rock.png";
import scissors from "./contents/scissors.png";
import paper from "./contents/paper.png";
export const gameimg = (imgName) => {
  switch (imgName) {
    case "rock":
      return rock;
    case "scissors":
      return scissors;
    case "paper":
      return paper;
  }
};
