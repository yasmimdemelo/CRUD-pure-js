let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {   /* (e) representa o elemento que foi adicionado para o event listener*/
    e.preventDefault();                     /* preventDefault()= Cancela o evento, significando que a ação padrão que pertence ao evento não ocorrerá*/
    console.log("button clicked");
    
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Task cannot be blank"; 
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
    }
};