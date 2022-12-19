let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");

form.addEventListener("submit", (e) => {   /* (e) representa o elemento que foi adicionado para o event listener*/
    e.preventDefault();
    console.log("button clicked");
    
    formValidation();
});

let formValidation = () => {};