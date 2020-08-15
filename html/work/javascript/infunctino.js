function test() {
  var URI = "http://www.naver.com?test=한글입니다";
  var esEncode = escape(URI);
  var encodeU = encodeURI(URI);
  var enUCom = encodeURIComponent(URI);
  var area = document.getElementById("area");

  area.innerHTML += `원본내용 : ${URI}<br>`;
  area.innerHTML += `escape : ${esEncode}<br>`;
  area.innerHTML += `encodeURI : ${encodeU}<br>`;
  area.innerHTML += `encodeURIComponent : ${enUCom}<br>`;

  area.innerHTML += `<h1>decode처리하기 <h1>`;
  area.innerHTML += `unescape:${unescape(esEncode)}<br>`;
  area.innerHTML += `decodeURI:${decodeURI(encodeU)}<br>`;
  area.innerHTML += `decodeURIComponent : ${decodeURIComponent(enUCom)}<br>`;
}

function test2() {
  var temp = "";
  temp += "var number1=document.getElementById('num1');";
  temp += "var number2=document.getElementById('num2');";
  temp += "var area=document.getElementById('area1');";
  temp += "area.innerHTML=number1.value+number2.value";
  console.log(temp);
  eval(temp);
}
//isNaN은 NaN인가 확인하는 함수
var su = 100;
var su2 = "백";
console.log(isNaN(su - su2));

var today = new Date();
today = new Date("08 14 20");
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours(), today.getMinutes(), today.getSeconds());

setInterval(() => {
  const time = new Date();
  const timecontainer = document.querySelector("#contaniner #time");
  timecontainer.innerHTML = `${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()}`;
}, 1000);
