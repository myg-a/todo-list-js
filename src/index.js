import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // 未完了のTODOへ追加
  createIncompleteList(inputText);
};

// 未完了のTODOから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了のTODOに追加する関数
const createIncompleteList = (text) => {
  // 未完了のTODOに追加する要素作成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-text";
  p.innerText = text;

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタンを押した要素を未完了のTODOから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    // TODOのテキスト取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // pタグ作成
    const p = document.createElement("p");
    p.className = "todo-text";
    p.innerText = text;
    //　戻るボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンを押した要素を完了したTODOから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // 完了したTODOに追加する要素作成
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了したTODOに追加
    const li = document.createElement("li").appendChild(addTarget);
    document.getElementById("complete-list").appendChild(li);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンを押した要素を未完了のTODOから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // 親子関係作成
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のTODOに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
