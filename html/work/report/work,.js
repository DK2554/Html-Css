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
