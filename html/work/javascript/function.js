function testFunc() {
  //alert("선언적 함수");
}
testFunc();

//매개변수 있는 선언적 함수

//타입이 숫자일때만 더하기를 실행
function sum(su, su2) {
  if (typeof su == "number" && typeof su2 == "number") {
    console.log(su + su2);
  }
  console.log("숫자만 전달하세요");
}
sum(100, 200);
sum(100, "5");
//정의된 매개변수보다 더 많은 매개변수를 보낸다면
sum(1, 2, 3, 4, 5, 6, 6, 7, 8, 8); //선언되 이외 전달된 매개변수는 무시!!
//전달된 매개변수는 자바스크립트 내장객체에서 따로 별도로 보관
//arguments객체에 매개변수 전체를 보관(배열)

function testArgument(name, age) {
  console.log(arguments);
  //   for (let i = 0; i < arguments.length; i++) {
  //     console.log(arguments[i]);
  //   }
  for (let k in arguments) {
    console.log(k);
  }
  //   console.log(`당신의 이름은 ${name}이고, 나이는 ${age}`);
}

testArgument("유병승", 19, "남", "경기도 시흥시");
//호이스팅 개념 var로 선언되거나 함수로 선언된것이
//스크립트문에서 한번에 훑어서 먼저 따로 담아놓고
//그다음에 수행
var test = function (su, su2) {
  console.log(su + su2);
};
function testDe(su1, su2) {
  console.log(su + su2);
}
test(10, 10);

// (function () {
//   console.log("이거실행");
// })();
//익명함수는 매개변수로 넣을때 많이 사용하게 됨.
var list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    alert("클릭함!");
  });
}

function arguFunc(fun) {
  var result = fun("유병승", "천재");
  console.log(result);
}
arguFunc(function (name, comment) {
  console.log(name + comment);
});
function notReturn() {
  console.log("리턴없다");
  return "실행했슈";
}
var return1 = notReturn();
console.log(return1);
function returnOn() {
  return [1, 2, 3, 4];
}
return1 = returnOn();
console.log(return1);
/*클로저 실습하기*/
function bacicFunc() {
  var name = prompt("이름입력");
}
//클로저 이용하여 지역변스로 선언된 내용 확인하기
function closure() {
  var name = prompt("이름입력");

  return function () {
    console.log(name);
  };
}
//bacicFunc();
var name1 = closure();
name1();
