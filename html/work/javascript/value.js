var a = 10; //전역변수
console.log(a);
console.log(this);
if (0 < 1) {
  var test = 20; //전역변수
}
console.log(test);
function local1() {
  local = 10;
}
console.log(local1);
ab = "유병승";
console.log(ab);
//자바스크립트에서 지역변수는 function을 기준으로 나눔
//function내부에 선언된 변수는 지역변수가 됨.

function test2() {
  var innerVari = "func변수";
  console.log(innerVari);
  console.log(this);
  console.log(a, ab);
  innerGlobal = "What?";
}
test2();
//console.log(innerVari);
//자바스크립트는 코드를 위에서 부터 순차적으로 해석하여 읽어옴

var ss = function () {
  var ss = 10;
};
//호이스팅~! 선언되어 있는 변수,function의 명칭을 먼저 읽어 저장해놓는것

console.log(abc);
var abc = 3.14;
test22();

function test22() {
  var tt = 22;
  console.log(tt);
}

//자바스크립트의 유연함
console.log(typeof afg);
if (typeof a === "undefined") {
  var a = "나도 추가해줘";
}
console.log(a);
//var로 선언된것은 다 전역변수
for (var i = 0; i < 10; i++) {
  console.log(i);
}
i = 20;
console.log(i);
//ECMA6 -> 변수선언 const,let 예약 추가->block범위로 설정
//const변수명->상수
//let 변수명->변수
if (a > 5) {
  const con1 = 20;
  console.log(`con1변수 :${con1}`);
}

for (let j = 0; j < 10; j++) {
  console.log(j);
}
//console.log(j);
let vv = 10;
console.log(vv);
vv = 20;
console.log(vv);

function testType() {
  //자료형별 리터럴 사용
  //string->"내용",'내용'
  //number->20,3.14
  //boolean->true,false
  //arry(object)->[값,값,값,....], new Array(값,값,값)
  //object->{kel:val, kel:val....}, new 객체명()
  //function->function(){}
  var name = "유병승";
  var nickname = "유뱅";
  var age = 19;
  var height = 180.5;
  var marride = true;
  var hobby = ["게임", "운동", "코딩"];
  console.log(age / 2);
  var item = {
    name: "컴퓨터",
    size: 20,
    weight: 1.2,
  };
  var toString = function () {
    console.log(`이름:${name} 별명:${nickname} 나이:${age}`);
  };
  var e = document.getElementById("type");
  e.innerHTML = `문자열: ${name}${nickname}<br>`;
  e.innerHTML += `숫자 : ${age} ${height}<br>`;
  e.innerHTML += `boolean:${marride}<br>`;
  e.innerHTML += `array타입 ${hobby}<br>`;
  e.innerHTML += `object타입 ${item}<br>`;
  e.innerHTML += `function함수 : ${toString}`;
  //변수에 자료형을 지정하지 않기 때문에
  name = item;
  console.log(name);
}
function checkType() {
  let e = document.getElementById("checkType");
  var name = "유병승";
  var nickname = "유뱅";
  var age = 19;
  var height = 180.5;
  var marride = true;
  var hobby = ["게임", "운동", "코딩"];
  console.log(age / 2);
  var item = {
    name: "컴퓨터",
    size: 20,
    weight: 1.2,
  };
  var toString = function () {
    console.log(`이름:${name} 별명:${nickname} 나이:${age}`);
  };

  console.log(typeof name);
  console.log(typeof age);
  console.log(typeof height);
  console.log(typeof hobby);
  console.log(typeof item);
  console.log(typeof toString);
}
