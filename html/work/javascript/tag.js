function accessId() {
  // 객체에 접근하기
  console.dir(document.getElementById("id1"));
  var e = document.getElementById("id1");
  e.innerHTML = "id로 접근해서 수정";
  e.style.color = "green";
  e.style.backgroundColor = "yellow";
}
function accessTagName() {
  var e = document.getElementsByTagName("li");
  console.log(e.length);
  console.log(e[0]);
  for (var i = 0; i < e.length; i++) {
    console.log(e[i].innerHTML);
  }
}
function accessClassName() {
  console.log(document.getElementsByClassName("a"));
  var e = document.getElementsByClassName("a");
  for (var i = 0; i < e.length; i++) {
    console.log(e[i].tagName);
    if (e[i].tagName === "P") {
      e[i].style.backgroundColor = "skyblue";
    }
  }
}
function accssName() {
  console.log(document.getElementsByName("hobby"));
  var e = document.getElementsByName("hobby");
  for (var i = 0; i < e.length; i++) {
    console.log(e[i].value);
    // check여부 확인
    console.log(e[i].checked);
  }
}
console.log(document.querySelectorAll("ol>li"));
console.log(document.querySelector(".b"));
