var tf = confirm("당신은 누구인가요");
var tt = document.getElementById("test");
tt.innerHTML = "안녕";
console.log(tf.valueOf);

var name = prompt("당신의 이름을 입력하세요");
console.log(name.valueOf);
function ckeckVal() {
  console.log(document.getElementsByTagName("input")[0].value);
}
