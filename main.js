/** @format */

let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let dark = document.getElementById("dark");
function add() {
  if (inputBox.value === "") {
    alert("Please Write Something !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let p = document.createElement("p");
    p.innerHTML = "Done";
    li.appendChild(p);
    let h6 = document.createElement("h6");
    h6.innerHTML = "Delete";
    li.appendChild(h6);
  }
  inputBox.value = "";
  save()
}
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "P") {
    e.target.classList.toggle("Lii");
    save()
  } else if (e.target.tagName === "H6") {
    e.target.parentElement.remove();
    save()
  }
});

function save() {
localStorage.setItem("data" , listContainer.innerHTML)
}
function show(){
    listContainer.innerHTML = localStorage.getItem("data")
}
show()
function dark(){
    let e  = document.getElementById("container");
    e.classList.toggle("containerR");
}

