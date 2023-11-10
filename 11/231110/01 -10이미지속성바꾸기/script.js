$(function () {
  let srcVal = $("#sec_1 img").attr("src");
  console.log(srcVal);

  $("#sec_1 img").attr({
    src: srcVal.replace(
      "https://blog.kakaocdn.net/dn/cpgcRP/btqPPCB2JWR/VoFFq3xhpKxGgNIQkrKiFK/img.jpg",
      "https://blog.kakaocdn.net/dn/9N2uH/btq0ulwstBf/FoKfNqP1U9lXwzwAKdhJAK/img.jpg"
    ),
  });
});
