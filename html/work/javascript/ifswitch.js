function pcheck() {
  var ps = document.querySelectorAll("p"); //배열로
  console.log(ps);
  for (var i = 0; i < ps.length; i++) {
    if (ps[i].className == "test") {
      console.log("들어오니");
      ps[i].style.color = "green";
      ps[i].style.background = "silver";
    } else {
      ps[i].style.color = "yellow";
      ps[i].style.background = "black";
    }
  }
}

function liChange() {
  //var c = document.getElementsByTagName("li");
  var c = document.querySelectorAll("li");
  for (var i = 0; i < c.length; i++) {
    //     if (c[i].innerHTML.length == 1) {
    //       c[i].style.color = "pink";
    //     } else if (c[i].innerHTML.length == 2) {
    //       c[i].style.color = "aqua";
    //     } else if (c[i].innerHTML.length == 3) {
    //       c[i].style.color = "green";
    //     } else {
    //       c[i].style.color = "white";
    //     }
    switch (c[i].innerHTML.length) {
      case 1:
        c[i].style.color = "pink";
        break;
      case 2:
        c[i].style.color = "aqua";
        break;
      case 3:
        c[i].style.color = "green";
        break;
      default:
        c[i].style.color = "white";
        break;
    }
  }
}
function whileTest() {
  var list = document.querySelectorAll("li");
  var area = document.getElementById("area");
  var i = 0;
  while (true) {
    if (list[i++].innerHTML == 456) break;
    area.innerHTML += `<p>${list[i - 1].innerHTML}</p>`;
  }
}
