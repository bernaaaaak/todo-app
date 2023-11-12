const form = document.querySelector("form");
const input = document.querySelector("#newTask");
const newtask = document.querySelector("#card-btn");

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addNewItem);
}

function addNewItem(e) {
    e.preventDefault();
    console.log("submit");
}

