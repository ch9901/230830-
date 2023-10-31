let scores = [90, 35, 64, 82, 23,97];

//scores라는 배열 안에 있는 아이템들 중 85이상의 값만 따로 필터링 해서 별도의 변수에 담아놓고싶다

let highScores = scores.filter((score) => score >= 85);

console.log(highScores);
