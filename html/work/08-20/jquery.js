$(() => {
  console.log($("#contatiner>h1"));
  console.log($("#contatiner>h1")[0]);
  let el = $("contatiner>h1");
  console.log(el[0]);
  $("#contatiner>h1").each((index, item) => {
    console.log(item);
    let bgcolor = "";
    let color = "";
    switch (index) {
      case 0:
        bgcolor = "red";
        color = "yellow";
        break;
      case 1:
        bgcolor = "orange";
        color = "white";
        break;
      case 2:
        bgcolor = "yellow";
        color = "green";
        break;
      case 3:
        bgcolor = "green";
        color = "white";
        break;
    }
    $(item).css({ backgroundColor: bgcolor, color: color });
  });
  let arr = ["유병승", "김도환", "유혜지", "김가남생축", "강범석"];
  $.each(arr, (index, item) => {
    console.log(index, item);
  });
});
function addObj() {
  let obj = {
    name: "유병승",
    age: 19,
  };
  let obj2 = {
    height: 180.5,
    weight: 65.6,
  };
  $.extend(obj, obj2);
  console.log(obj);
}
//달러라는 표시를 변수명으로 바꾼다

// var jq = $.noConflict();
function addClass1() {
  $("#container")
    .children()
    .each((i, v) => {
      //   if (i % 2 == 0) {
      //     $(i, v).addClass("a0 a4");
      //   } else {
      //     $(v).addClass("a0");
      //   }
      $(v).addClass((n) => {
        return "a" + n;
      });
    });
}
function removeClass1() {
  $("#container")
    .children()
    .each((v) => {
      $(v).removeClass("a0");
    });
}
function toggleClass1() {
  $("#container").children().toggleClass("a0");
}
