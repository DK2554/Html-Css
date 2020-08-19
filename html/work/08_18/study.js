function asingTest() {
  location.assign("http://www.iei.or.kr");
}
//assing 뒤로가기 가능
//replace 뒤로가기 불가능
function navigatorInfo() {
  var area = document.getElementById("navigator");
  //navigator는 객체
  for (let v in navigator) {
    area.innerHTML += ":" + navigator[v] + "<br>";
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    area.innerHTML =
      "위도 : " +
      position.coords.latitude +
      "경도 : " +
      position.coords.longitude;
  });
}
function screenInfo() {
  var area = document.getElementById("screenInfo");
  for (let v in screen) {
    area.innerHTML += `${v}: ${screen[v]}<br>`;
  }
}
function addFile() {
  //새로운 태그를 생성해서 추가하기
  //태그를 생성해서 추가하는 방법2가지
  //1.innerHTML속성에 태그를 문자열로 생성해서 추가하는것
  document.body.innerHTML += `<br><input type='file'>`;

  //document객체가 제공하는 메소드를 이용해서 태그를 생성하는 방법.
  //1.태그를 생성 createElement(태그명)
  //2.텍스트노드가 있으면 텍스트 노드도 생성 : createTextNode("내용")
  //3.생성된 태그와 텍스트 노드를 연결
  //태그변수.appendChild(텍스트노드변수명);
  //4.페이지의 특정태그에 연결
  //document.body.appendChild(태그변수명)
  let tag = document.createElement("p");
  let text = document.createTextNode("내용");
  tag.appendChild(text);
  const p = document.getElementById("addElement");
  p.appendChild(tag);
}
function textadd() {
  var area = document.getElementById("inputext");
  var tag = document.getElementById("tag").value;
  var content = document.getElementById("content").value;
  var t = document.createElement(tag);
  var c = document.createTextNode(content);
  t.appendChild(c);
  area.appendChild(t);
  //   let tag = document.createElement("p");
  //   let text = document.createTextNode(
  //     document.getElementById("addtext").textContent
  //   );
  //   tag.appendChild(text);
  //   let p = document.getElementById("inputext");
  //   p.appendChild(tag);
}
function addImg() {
  const imgcontainer = document.getElementById("imgContainer");
  let tag = document.createElement("img");
  let path = document.getElementById("path").value;
  //태그에 속성값 설정하기
  //element에 setAttribute("속성명,","속성값")
  tag.setAttribute("src", path);
  tag.setAttribute("width", "100");
  tag.setAttribute("height", "100");
  imgcontainer.appendChild(tag);
  console.log(tag.attributes);
  const att = tag.attributes;
  for (let i = 0; i < att.length; i++) {
    console.log(tag.attributes[i]);
  }
}
function deleteImg() {
  const conatainer = document.getElementById("imgContainer");
  //conatainer.removeChild(conatainer.lastChild);\
  conatainer.firstChild.remove();
}

function change() {
  var inter = setInterval(function () {
    var t = document.getElementById("target");
    console.log(t.className, t.classList);
    const c = t.classList;
    if (c.contains("back1")) {
      c.remove("back1");
      c.add("back2");
    } else if (c.contains("back2")) {
      c.remove("back2");
      c.add("back1");
    }
    count++;
    if (count == 5) {
      clearInterval(inter);
      count = 0;
    }
  }, 500);
}

// let t1 = document.getElementById("ttarget");
// console.dir(t1);
// t1.onmouseenter = (e) => {
//   console.log(e);
//   t1.innerHTML = "마우스들어옴";
// };
// t1.onmouseleave = () => {
//   t1.innerHTML = "마우스나감";
// };

let t2 = document.getElementsByTagName("h3");
for (let i = 0; i < t2.length; i++) {
  t2[i].onmouseenter = () => {
    t2[i].innerHTML = "이벤트로바꾼 문구!";
  };
}

let btns = document.getElementsByClassName("change2");
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = (e) => {
    // btns[i].innerHTML = "변경하자";
    console.log(e.target);
    console.log(e.target.parentElement);
    console.log(e.target.parentElement.previousElementSibling);
    e.target.parentElement.previousElementSibling.innerHTML = "이거추가하자";
  };
}

let pwck = document.getElementById("rpw");
let pass = document.getElementById("pw");
function focusTest(e) {
  alert("비밀번호는 8글자 이상 특수문자를 포함해주세요");
  pass.removeEventListener("focus", focusTest);
}
pass.addEventListener("focus", focusTest);
pwck.addEventListener("keyup", (e) => {
  const pw = document.getElementById("pw").value.trim();
  const result = document.getElementById("result");
  if (e.target.value === pw) {
    result.style.color = "green";
    result.innerHTML = "비밀번호가 일치합니다";
  } else {
    result.style.color = "red";
    result.innerHTML = "비밀번호가 일치하지 않습니다";
  }
});
function prevent(e) {
  e.preventDefault();
}
function checkData() {
  let name = document.getElementById("name");
  let pw = document.getElementById("ppw");
  if (name.value.length < 3) {
    alert("아이디를 3글자 이상 입력하세요");
    return false;
  }
  if (ppw.value.length < 8) {
    alert("비밀번호를 8글자 이상 입력하세요!");
    return false;
  }
  return true;
}
let divs = document.querySelectorAll(".div1, .div1 div");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", (e) => {
    alert(`${divs[i].className}클릭함`);
    //이벤트전달되는것을 막는다 버블링 효과
    e.stopPropagation();
  });
}
console.log(divs);

//RegExp객체 생성
//2가지 있음
//1.new 연산자를 이용 :var reg=new RegExp(표현식);
//2. //연산자 이용 var reg=/표현식/;
var reg = new RegExp("scrpit");
reg = /script/;
console.log(reg.test("javascript"));
console.log(reg.exec("javascript jquery"));
