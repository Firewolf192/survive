let button = document.querySelector("#b");
let menu = document.querySelector("#m");

let list = document.querySelector("#l")

button.addEventListener("click", function(){
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        list.classList.remove("hide")

    }   

    else{
        menu.classList.add("hidden");
        list.classList.add("hide")
    };
     
});
