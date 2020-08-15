//1.영문자를 대문자,소문자를 처리하는 함수
console.log("abc".toUpperCase());
console.log("abc".toLocaleLowerCase());

function checkGender() {
  var e = document.getElementById("gender");
  var value = e.value;
  console.log(value);
  e.value = value.toUpperCase();
}
//2.문자의 길이를 확인하는 멤버변수:lenth
function chekName() {
  var e = document.getElementById("name");
  var value = e.value;
  if (value.length < 4) {
    alert("4글자 이상 입력");
  }
  //3.특정문자의 위치를 찾는 함수
  console.log("유병승".indexOf("병"));
  console.log("이제 곧 쉬는 시간".charAt(1));
  //5.문자열을 잘라내는 함수:substring
  console.log("유병승강사님".substring(4));
  console.log("유병승 강사님".substring(0, 3));
  //6. 특정구문자로 배열로 변환해주는 함수:splite()
  var names = "유병승,이성준,온영석,임지현,강범석";
  var arrName = names.split(",");
  console.log(typeof arrName, arrName);
  //7.특정문구를 찾는것: includes();
  console.log("유병승 천재".includes("천재"));
  //8.특정문구를 변경하는것: replace();
  console.log("유병승 천재".replace("천재", "바보"));
  //9.공백제거 하는 함수:trim()
  console.log("유병승    ", "유병승    ".trim());
}
//1.isInteger():값이 정수인지 실수인지 확인
var aa = 100;
console.log(Number.isInteger(aa));
console.log(Number.isInteger(3.14));
//실수,랜덤값을 처리하는 함수:Math
//1.Math.abs():절대값(음,양없음)
console.log(Math.abs(10), Math.abs(-10));
//2.Math.random():임의의 난수
console.log(Math.floor(Math.random() * 10));
//3.Math.floor():소수점 버림
console.log(Math.floor(1.66));
//4.Math.round():반올림
console.log(Math.round(1.66));
console.log(Math.round(1.49));
//5.Math.ceil():무조건 올림
console.log(Math.ceil(1.2));
//값이 아닌수로 대입이 되면?
//NaN not a number
console.log(Math.floor("안녕"));

var su = 19;
var name = "병승";
console.log(name + su, typeof (name + su));
console.log(typeof su, typeof su.toString(), su.toString());

var s1 = 10;
var strsu = "20원";
//parseInt 앞에있는 숫자만 형변환해서 수행 뒤에 문자열은 버린다
console.log(s1 + Number(strsu)); //형변환
console.log(s1 + parseInt(strsu));
console.log(s1 - strsu);
console.log(s1 * strsu);
console.log(s1 / strsu);

var num = 20;
var strnum = "20";
var strnum2 = "10";
var strnum3 = "20";
console.log(num == strnum);
console.log(num == strnum2);
console.log(strnum === strnum2);
console.log(strnum === strnum3);
//자료형까지 비교해서 처리해야할 경우
console.log(strnum == num, strnum === num);
//홀수짝수를 확인하는 로직을 구성
var input = Number(prompt("숫자입력"));
// if (input % 2 == 0) {
//   alert("짝수입니다");
// } else {
//   alert("홀수입니다");
// }
// input % 2 == 0 ? alert("짝수입니다") : alert("홀수입니다");
//짧은 조건문이용
input % 2 == 0 && alert("짝수입니다");
input % 2 == 0 || alert("홀수입니다");
