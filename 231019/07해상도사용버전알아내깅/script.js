let info = window.navigator.userAgent.toLowerCase();
console.log(info);
let ofImg;
if (info.indexOf("windows") >= 0) {
  osImg = "pic_2.jpg";
} else if (info.indexOf("macintosh") >= 0) {
  osImg = "pic_3.jpg";
} else if (info.indexOf("iphone") >= 0) {
  osImg = "pic_4.jpg";
} else if (info.indexOf("android") >= 0) {
  osImg = "pic_5.jpg";
}

document.write(`<img src="../img/${osImg}" alt="">
<br>`);

let scr = screen;
let sc_w = scr.width;
let sc_h = scr.height;

document.write(`모니터해상도너비 : ${sc_w}<br>`);
document.write(`모니터해상도높이 : ${sc_h}<br>`);
