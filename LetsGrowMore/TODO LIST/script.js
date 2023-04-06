const inputBox = document.querySelector(".inp input");
const addBtn = document.querySelector(".inp button")
const todolist = document.querySelector(".list");
const deleteBtn = document.querySelector(".reset");

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
}
displaytasks();
addBtn.onclick = () => {
  let userData = inputBox.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listitems = [];
  }
  else {
    listitems = JSON.parse(getLocalStorageData);
  }
  listitems.push(userData);
  localStorage.setItem("New Todo", JSON.stringify(listitems));
  displaytasks();
}

function displaytasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  }
  else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pending = document.querySelector(".pending");
  pending.textContent = listArray.length;
  
  if (listArray.length > 0) {
    deleteBtn.classList.add("active");
  }
  else {
    deleteBtn.classList.remove("active");
  }
  let newLine = "";
  listArray.forEach((element, index) => {
    newLine += `<li>${element}  <span class="remove" onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
  });
  todolist.innerHTML = newLine;
  inputBox.value = "";
}
function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  displaytasks();
}
deleteBtn.onclick=()=>{
  listArray=[];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  displaytasks();
}