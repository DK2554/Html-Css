//1
function inputprint() {
  var by = document.getElementById("byer").value;
  var t = document.getElementById("tt").value;
  var pirce = document.getElementById("price").value;

  var text = document.getElementById("date");
  text.innerHTML += `구입자 : ${by}\n`;
  text.innerHTML += `상품명 : ${t} \n `;
  text.innerHTML += `가격 : ${pirce} 만원`;
}
function sendmessage() {
  var name = document.getElementById("name").value;
  var count = document.getElementById("count").value;
  var grade = document.getElementById("grade").value;
  var tt1 = document.getElementById("tt1").value;

  alert(`상품명 : ${name}
  납품등급 : ${grade}
  남풉수량 : ${count}
  기타사항 : ${tt1}
  입력하신내용이 맞습니까?
  `);
}
function changeBt(v) {
  var titlebx = document.getElementById("titlebox");
  var tdatebx = document.getElementById("datebox");
  var writerbx = document.getElementById("inputbox");
  if (v == "title") {
    titlebx.style.display = "inline";

    tdatebx.style.display = "none";
    writerbx.style.display = "none";
  } else if (v == "date") {
    titlebx.style.display = "none";
    tdatebx.style.display = "inline";

    writerbx.style.display = "none";
  } else {
    titlebx.style.display = "none";
    tdatebx.style.display = "none";
    writerbx.style.display = "inline";
  }
}

//전체선택박스
function allck(v) {
  var al = document.getElementById("all");
  var ck = document.querySelectorAll(".ck");
  if (v == 1) {
    for (var i = 0; i < ck.length; i++) {
      ck[i].checked = al.checked;
    }
  }
}
function button1() {
  var e = document.getElementById("test1").value.length;
  var text1 = document.getElementById("result1");
  text1.innerHTML = `보기의 문자열 길이는 ${e}글자입니다`;
  console.log(e);
}
function button2() {
  var tt = document.getElementById("test2").textContent.split(",");
  var t2 = document.getElementById("result2");
  for (var i = 0; i < tt.length; i++) {
    t2.innerHTML += `${i + 1}.${tt[i]}<br>`;
  }
}
//innertText와  textContext차이점은 inner은 공백을 제거하고 가져오고 text는 공백포함해서 가져온다
function sumbit() {
  var ttext = document.getElementById("ttext").value;
  var t1 = document.getElementById("total").innerText;
  var t2 = t1.replace(/\n/g, "");
  console.log(ttext);
  console.log(t1);
  console.log(typeof t1);
  console.log(t2);
  var t3 = t2.split(",");
  var tindex = t3.indexOf(ttext);
  alert(`${ttext}는 배열 index${tindex}번째에 존재합니다`);
}
