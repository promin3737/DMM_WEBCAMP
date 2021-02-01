var username;
var userresult;

// 入力した名前をusername変数に代入
username = prompt("お名前を教えて下さい。");
// 入力欄が空白の場合は『名無し』、それ以外はusernameに代入されている値を表示
if(username == ""){
document.getElementById("name").innerHTML = "名無し";
}else{
  document.getElementById("name").innerHTML = username;
}

// ランダム変数を定義
var rand = Math.floor( Math.random() * 5) ;
if (rand == 0) {
  userresult = "大吉";
}
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}

// 結果を画面に表示
document.getElementById("result").innerHTML = userresult;