$(function () {
  let arr1 = [
    { area: "seoul", name: "park" },
    { area: "busan", name: "kim" },
    { area: "daejeon", name: "lee" },
    { area: "seoul", name: "choi" },
  ];
  let arr3 = $.grep(arr1, function (a, b) {
    if (a.area == "seoul") {
      return true;
    } else {
      return false;
    }
  });
  console.log(arr3);
});
