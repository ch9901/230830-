let inch = parseFloat(prompt("cm로 변환 할 inch값을 입력하세요!"));
let cm = (inch / 2.54).toFixed(2);
alert(`입력하신 ${inch}inch는 ${cm}cm 입니다.`);
