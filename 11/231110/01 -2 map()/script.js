$(function () {
  let arr1 = [
    { area: "seoul", name: "park" },
    { area: "busan", name: "kim" },
    { area: "daejeon", name: "lee" },
    { area: "seoul", name: "choi" },
  ];

  let arr2 = $.map(arr1, function (a, b) {
    if (a.area == "seoul") {
      return a;
    }
  });
  console.log(arr2);
});
