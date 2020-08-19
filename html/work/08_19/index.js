function test() {
  let area = document.getElementById("area");
  let reg = /as/;
  let str = "javascript jquery ajax sass";

  //replace로 찾은 문자를 대체해보자
  //$&:찾은 문자를 출력
  area.innerHTML = `${str.replace(reg, "($&)")}<br>`;
  area.innerHTML += `$\`: ${str.replace(reg, "($`)")}<br>`;
  area.innerHTML += `$': ${str.replace(reg, "($`)")}<br>`;
}

function testFlag() {
  let area = document.getElementById("area1");
  let reg = /a/gi;
  let reg2 = /^J/g;
  let str = "Javascript Jquery Ajax";
  let str2 = "Javascript \nJquery Ajax";
  area.innerHTML += `g : ${str.replace(reg, "($&)")}<br>`;
  area.innerHTML += `i : ${str.replace(reg, "($&)")}<br>`;
  area.innerHTML += `m : ${str2.replace(reg2, "($&)")}<br>`;
}
function test2() {
  let area2 = getElement("area2");
  let reg = /^j/gi;
  let str = "Javascript Java Jquery Ajax";
  area2.innerHTML += `^:${str.replace(reg, "-$&-")}<br>`;
  let reg2 = /^jx$/g;
  area2.innerHTML += `^:${str.replace(reg2, "-$&-")}<br>`;
}

function getElement(id) {
  return document.getElementById(id);
}
let str = "$12$ \\-\\ $25$";
let reg = /$\\/g;
console.log(str.replace(reg, "($&)"));

function test3() {
  let area = getElement("area3");
  let reg = /a.b/g; //a와b사이에 한글자있는것
  area.innerHTML += `a.b :${reg.test("ab")}<br>`;
  area.innerHTML += `a.b :${reg.test("aab")}<br>`;
  area.innerHTML += `a.b :${reg.test("a b")}<br>`;
}
function test4() {
  let area = getElement("area4");
  let reg = /[aj]/gi; //a또는 j를 찾아라
  let str = "Javascript Jquery Ajax";
  area.innerHTML += `[aj] : ${str.replace(reg, "($&)")}<br>`;
  let reg2 = /[^aj]/gi;
  area.innerHTML += `[^aj]:${str.replace(reg2, "($&)")}<br>`;
  let reg3 = /[a-z]/g;
  let reg4 = /[0-9]/g;
  let reg5 = /[가-힣]/g;
  area.innerHTML += `[a-z]:${str.replace(reg3, "($&)")}<br>`;
  area.innerHTML += `[0-9]:${"2U3IRIOWFE43T98REK4IUERWIEHR".replace(
    reg4,
    "($&)"
  )}<br>`;
  area.innerHTML += `[a-z]:${"하ㅜㅁ나후미;ㅏ뉘마누햐쿺짇휘만우".replace(
    reg5,
    "($&)"
  )}<br>`;
}
let week = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
function test5() {
  let area = getElement("area5");
  let reg = /(금|토|일)요일/;
  let result = week.filter(function (v, i) {
    return reg.test(v);
  });
  area.innerHTML = `결과 : ${result}<br>`;
}
function test6() {
  let area = getElement("area6");
  let reg = /a*b/g;
  let str = "aabc abc bc a";
  area.innerHTML = `/a*b/g : ${str.replace(reg, "($&)")}<br>`;
  reg = /a+b/g;
  area.innerHTML = `/a*b/g : ${str.replace(reg, "($&)")}<br>`;
}

function test7() {
  let area = getElement("area7");
  let str = "AA ABA ABBA ABBBA";
  let reg = /AB{2}A/g; //A사이A에 B가 2개이상인 것
  //reg=/[가-힣]{3}
  area.innerHTML += `/AB{2}A/g : ${str.replace(reg, "($&)")}<br>`;
  reg = /AB{1,2}A/g;
  area.innerHTML += `/AB{1,2}A/g : ${str.replace(reg, "($&)")}<br>`;
  reg = /AB{1,}A/g; //AB+A/랑 동일
  area.innerHTML += `/AB{1,}A/g : ${str.replace(reg, "($&)")}<br>`;
}
function regtest() {
  let area = getElement("area8");
  let rer = /..\./;
  let retext = document.getElementsByTagName("li");
  for (let i = 0; i < retext.length; i++) {
    let v = retext[i].innerHTML;
    console.log(`${v}:${rer.test(v)}`);
  }
  //area.innerHTML += retext;

  //area.innerHTML += `${retext[0]}${retext.test(regtest1)}`;
}
function ex2() {
  let regEx2 = /^[^0-9]{1,}..[xyz]{1,}$/;
  let value = getElement.value;
  if (regEx2.test(value)) {
    alert("적합한문자열입니다");
  } else {
    alert("부적합한 문자열입니다");
  }
}
function validate() {
  //아이디 첫글자 영소문자, 4~12자로 만들어지고
  //반드시 한개이상의 숫자가 포함 영문,숫자로만 작성
  //비밀번호 8~15글자 이내 숫자,문자, 특수기호 포함
  //이름 한글 2~4
  let name = getElement("name").value;
  let id = getElement("id").value;
  let pw = getElement("pw").value;
  let regName = /[가-힣]{2,4}/;
  if (!regName.test(name)) {
    alert("이름은 한글로 2~4글자로 입력해주세요!");
    return false;
  }
  let regId = /^[a-z][a-zA-Z0-9]{3,11}/;
  let toreg = /^[a-z](?=.*?[\d])[a-z\dA-z]{3,11}$/;

  if (!toreg.test(id)) {
    alert("첫글자가 영소문자이고 4~15의 영문자,숫자로 입력해야합니다");
    return false;
  }
  //regEXP사이트
  // if (!regId.test(id)) {
  //   alert("첫글자가 영소문자이고 4~15의 영문자,숫자로 입력해야합니다");
  //   return false;
  // }
  // if (!/[\d]/.test(id)) {
  //   alert("아이디에 숫자가 반드시 포함되어야합니다");
  //   return false;
  // }
  let regPw = /^.*(?=^.{8,15})(?=.*\d)(?=.*[a-zA-z])(?=.*[!@#$%&*()]).*$/; //0개이상 체크 8개이상15미만
  if (!regPw.test(pw)) {
    alert("비밀번호에 8~15자리 이내 숫자,문자,특수기호 포함");
    return false;
  }
}
