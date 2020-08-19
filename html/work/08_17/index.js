var obj = {};
console.log(obj, typeof obj);
//리터럴로 선언한 객체
obj = {
  name: "유병승",
  age: 19,
  height: 180.5,
  birthday: new Date(),
  hobby: ["독서", "여행", "코딩"],
  toString: function () {
    console.log(this.name, this.age, this.birthday);
  },
};

console.log(obj);
//각 property의 값에 접근하기
//접근방법:[],. 두가지 방법이 있음
//[]접근할때는 키를 문자열로 사용해야함
console.log(obj.name);
console.log(obj.birthday);
console.log(obj["age"]);
console.log(obj["height"]);
console.log(obj["hobby"][0]);
console.log(obj.hobby);

//함수 호출
obj.toString();
obj["toString"]();
//속성명에는 띄어쓰기 특수기호를 사용할 수 없을까??
var obj2 = {
  "test 1": "하하하",
  "*^.~*": "윙크!",
};
//문자열로 지정한 속성명은 []로만 접근이 가능------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(obj2["test 1"]);

//객체 전체를 순회하는 경우
//for in문을 사용함
for (var temp in obj2) {
  //string으로 가죠온다
  console.log(temp);
  console.log(obj2[temp]);
}
for (var temp in obj) {
  console.log(obj[temp]);
  if (typeof obj[temp] == "function") {
    obj[temp]();
  }
}

var obj3 = {
  temp: "객체안의 객체",
  o: {
    test: 1,
    test2: "하하",
  },
};
for (var temp1 in obj3) {
  if (typeof obj3[temp1] == "object") {
    for (var tt in obj3[temp1]) {
      console.log(obj3[temp1][tt]);
    }
  }
}

//객체에 property 추가/삭제하기
//property추가하는 방법 : .,[]새로운 property명,값대입
var changobj = {};
console.log(changobj);
changobj.name = "유병승";
changobj["age"] = 19;
changobj["hobby"] = ["공부", "코로나퇴치"];
console.log(changobj);
//property를 삭제? 가능??
//delete()함수를 이용해서 삭제함
//.접근연산자를 사용해서 속성을 삭제함
delete changobj.age;
console.log(changobj);

var s1 = {
  name: "김도환",
  grade: 1,
  gradPoint: {
    math: 10,
    eng: 20,
    kor: 40,
  },
};
var s2 = {
  name: "홍지운",
  grade: 2,
  gradPoint: {
    math: 70,
    eng: 80,
    kor: 10,
  },
};
var s3 = {
  name: "최민수",
  grade: 3,
  gradPoint: {
    math: 20,
    eng: 15,
    kor: 20,
  },
};

var students = [];
students.push(s1);
students.push(s2);
students.push(s3);
for (let i = 0; i < students.length; i++) {
  //   if (students[i]["name"] == "김도환") {
  //     for (let temp in students[i]) {
  //       console.log(students[i][temp]);
  //     }
  //   }
  //   if (students[i]["name"] == "김도환") {
  var container = document.getElementById("table1");
  container.innerHTML +=
    "<tr><td>" +
    students[i]["name"] +
    "</td><td>" +
    students[i]["grade"] +
    "</td></tr>";
}
//값을 쏴줄때는
function studentCreate(name, greade, gradePoint) {
  var obj = {
    name: name,
    greade: greade,
    gradePoint: gradePoint,
  };
  return obj;
}
students.push(studentCreate("온영석", 3, { kor: 50, eng: 40, math: 60 }));
console.log(students);

//생성자 함수 만들기
//생성자 함수의 첫글자는 대문자로 암묵적인 양식지키기
function Student(name, greade, greadePoint) {
  this.name = name;
  this.greade = greade;
  this.greadePoint = greadePoint;
  this.toString = function () {
    let gstr = "";
    for (let t in this.greadePoint) gstr += this.greadePoint[t] + " ";
    return this.name + " " + this.greade + " " + gstr;
  };
}
//new연산자를 통해서 객체를 생성함
students.push(new Student("강범석", 2, { kor: 40, eng: 30, math: 30 }));
console.log(students);
console.log(students[4]["name"]);
console.log(students[4]["toString"]());

//instanceof예약어 특정생성자 함수에서 생성된 객체인지 확인
console.log(students[3]); //객체 생성 함수를 이용함
console.log(students[4]);
console.log(students[3] instanceof Student);
console.log(students[4] instanceof Student);

function Member(id, pw, name, email, address) {
  //   this.id = id;
  //   this.pw = pw;
  //   this.name = name;
  //   this.email = email;
  //   this.address = address;
  var id = id;
  var pw = pw;
  var name = name;
  var email = email;
  var address = address;
  //자바스크립트에서 getter와 setter생성
  this.getId = function () {
    return id;
  };
  this.setId = function (id1) {
    if (id1.length < 4) {
      console.error("4글자 이상만 입력가능");
    } else {
      id = id1;
    }
  };
}
var m = new Member("admin", "1234", "관리자", "admin@admin.com", "서울시");
console.log(m.id);
console.log(m.getId());
console.log(m.setId("user01"));
console.log(m.getId());

function Book(title, price, discountRate) {
  this.title = title;
  this.price = price;
  this.discountRate = discountRate;
  //   book.getSalePrice = function () {
  //     return price + (price * discountRate + 0.1);
  //   };
}
Book.prototype.getSalePrice = function () {
  return this.price - (this.price * this.discountRate + 0.1);
};
Book.prototype.getAdvertising = function () {
  return "화제의 책!" + this.title;
};
var book = new Book("자바의 정석", 37000, 0.2);
console.log(book.title);
console.log(book.price);
console.log(book.getSalePrice());
console.log(book.getAdvertising());
var book2 = new Book("오라클의 정석", 40000, 0.1);
console.log(book2.title);
console.log(book2.price);
console.log(book2.getSalePrice());
console.log(book2.getAdvertising());
//자바스크립트 상속처리하기
function Novel(title, price, discountRate, type) {
  this.base = Book;
  this.base(title, price, discountRate);
  this.type = type;
}
Novel.prototype = Book.prototype;
var n = new Novel("운수좋은날", 20000, 0.2, "소설");
console.log(n);
console.log(n.title);
console.log(n.getSalePrice());

console.log(this);

function newWindow() {
  window.open("http://instagram.com", "_blank", "width=300,height=300");
  //_self는 자기자신이 열린다
  //새로생성된 윈도우 객체를 반환함..!
}
function newWindow2() {
  var child = open("", "_blank", "width=400,height=300");
  console.log(child);
  let script = "<script>";
  script += "function sendData(){";
  script += "var con = opener.document.getElementById('container');";
  script += "var value=document.getElementById('data').value;";
  script += "con.innerHTML = '<h2>' + value + '</h2>';}";
  script += "</";
  script += "script>";

  //opener는 open을 수행한 부모를 뜻한다
  child.document.write(
    "<html><body><h2>부모창에서 작성한 내용</h2><input id='data' type='type'><button onclick='sendData();'>데이터 전송</button>" +
      script +
      "</body></html>"
  );
}
function setTimeoutTest() {
  var child = open("", "", "width=300,height=300");
  child.alert("이 창은 3초후에 종료됩니다.");
  setTimeout(() => {
    child.close();
  }, 3000);
}
function setInterValTest() {
  var inter = setInterval(() => {
    var value = document.getElementById("check").value;
    if (value == "no") {
      clearInterval(inter);
    }
    alert("이얏!");
  }, 3000);
}
function closeWin() {
  var child = open("", "", "width=300,height=300");
  setInterval(() => {
    child.moveTo(
      Math.floor(Math.random() * 500),
      Math.floor(Math.random() * 500)
    );
    child.resizeTo(
      Math.floor(Math.random() * 700),
      Math.floor(Math.random() * 700)
    );
  }, 500);
}
document.getElementById("container2").innerHTML = "<h2>하하하<h2>";

function locationInfo() {
  var locationContent = document.getElementById("locationContent");
  for (let key in location) {
    locationContent.innerHTML += `${key}:${location[key]}<br>`;
  }
}

function moveSite() {
  var addr = document.getElementById("addr").value;
  location.href = "http://" + addr;
}
