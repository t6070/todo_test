const openSubWindowBtn = document.getElementById("sub-window");
const subWindow = document.getElementById("sub-content");
const windowWidth = 60;
let openFlg = false;
const todayDate = new Date();
const formatDate = todayDate.toLocaleDateString();

//ページ読み込み時点で、今日の日付を表示
window.onload = () => {
  const todayDateElem = document.getElementById("today-date");
  todayDateElem.innerText = formatDate;
};

// サブウインドウの開閉処理
openSubWindowBtn.onclick = () => {
  for (let i = 0; i < windowWidth; i++) {
    //開閉の状態によって設定する値を分岐
    subWindow.style.width = openFlg ? `-${i}%` : `${i}%`;
  }
  //開閉の状態によってボタンのテキストを分岐
  openSubWindowBtn.innerText = openFlg ? "▶︎" : "◀︎";
  //開閉フラグを変更
  openFlg = !openFlg;
};
