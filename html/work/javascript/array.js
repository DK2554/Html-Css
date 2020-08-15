//배열 선언하기
//1.[]이용하는 방법:var test=[값,값,값]; var test=[];
//*자료형은 상관없음
//2.Array객체를 이용하는 방법:var test=new Array(값,값,값);

var a = [1, 2, 3, 4, 5, 6];
console.log(a);
var b = [];
console.log(b);
//선언과 동시에 초기화 해서 사용하기
var arr1 = ["유병승", "온영석", "강범석"];
console.log(arr1);
//배열에는 여러가지 자료형이 들어갈 수 있음
arr1 = [
  "유병승",
  19,
  180.5,
  { name: "hoho", size: 20 },
  function () {},
  [1, 2, 3, 4, 5],
];
//배열의 요소에 접근하기
//인덱스번호로 접근하면됨!!
console.log(arr1[4]());
console.log(arr1[3].size);
console.log(arr1[arr1.length - 1][0]);
//선언된 배열에 값 넣기
a[0] = "이제곧 수업끝!";
console.log(a.length, a[0]);
a[10] = 100;
console.log(a.length, a[10]);
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

//new 연산자를 이용해서 배열 생성하기
var arr3 = new Array();
console.log(arr3, typeof arr3);

arr3 = new Array("아보카도", "딸기", "바나나", "키위");
console.log(arr3);
arr3 = new Array(10);
console.log(arr3[0]);

function indexOfTest() {
  var area = document.getElementById("area");
  var ar2 = ["서울", "대전", "대구", "부산"];
  area.innerHTML = `arra:${ar2}<br>`;
  area.innerHTML += `대전위치찾기 : ${ar2.indexOf("대전")}`;
  var value = document.getElementById("key").value;
  area.innerHTML += `key로 위치찾기 : ${ar2.indexOf(value)}`;
}
function concatTest() {
  var area = document.getElementById("area1");
  var animal = ["강아지", "코끼리", "오랑우탄"];
  var food = ["냉면", "볶음밥", "샐러드", "샌드위치"];
  var total = animal.concat(food);
  area.innerHTML = total;
  area.innerHTML += `${typeof total}`;
}
function joinTest() {
  var are = document.getElementById("area2");
  var arr = ["손예진", "제니", "아이유", "김세정"];
  var strArr = arr.join();
  are.innerHTML = `${strArr} ${typeof strArr}`;
}
arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);
arr = ["유병승", "온영석", "강범석", "임지현"];
arr.reverse();
console.log(arr);

arg = [141, 7, 1, 3, 4, 6, 88, 43];
arr = ["가", "나", "다", "라", "마", "바", "사"];
var de = function (left, reight) {
  return reight - left;
};
console.log(arg);
arg.sort();

console.log(arg);
//ECMA6 화살표함수: 매개변수=> {실행로직}
arr.sort((left, right) => {
  if (left > right) return -1;
  else if (left > right) return 1;
  else return 0;
});
arg.sort((left, right) => {
  return right - left;
});
console.log(arg);

var arr4 = ["독서", "코딩", "영화", "게임"];
console.log(arr4);
arr4.push("운동");
arr4.push("자전거");
console.log(arr4);
arr4.pop();
console.log(arr4);
//배열의 앞부분에 요소를 추가하기
console.log(arr4);
arr4.unshift("행복");
console.log(arr4);
arr4.shift();
console.log(arr4);

var arr5 = ["자바", "오라클", "html", "css", "javascript"];
//화면구현 내용만 배열로 만들기
var front = arr5.slice(2, 5); //원본값에는 영향을 미치지 않음
console.log(arr5);
console.log(front, typeof front);
// splice는 원본값이 수정이 됨
//splice(start,지울갯수,추가할 값[추가할값])
// arr5.splice(1, 0, "JDBC");
arr5.splice(2, 3, "JDBC");
console.log(arr5);

var heights = [180, 175, 190, 200];
// var aal = height.find(function (height) {
//   return height >= 190;
// });
// var val = height.filter(function (height) {
//   return height >= 190;
// });
console.log(val);
var val = heights.filter((height) => {
  return height >= 190;
});
console.log(val);

// arr4.forEach(function (value, index) {
//   console.log(`값:${value} 인덱스: ${index}`);
// });
arr4.forEach((value, index) => {
  console.log(`값 ${value} 인덱스 ${index}`);
});
