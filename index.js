

let sub = document.querySelector("#subjects");
let teach = document.querySelector("#teachers");

let cont = document.querySelector(".cointainer3");

let text = document.querySelector(".subjects");
let text2 = document.querySelector(".subjects2");


let button1 = document.querySelector("#b");
let button2 = document.querySelector("#b2");

let box1 = document.querySelector(".box");
let box2 = document.querySelector(".box2");


function remove(){
   
  
    if(sub.classList.contains("hidden")){
        sub.classList.remove("hidden");
        text.classList.remove("hidden");
       
    } else
    {
        sub.classList.add("hidden");
        text.classList.add("hidden");
    }
    
};

function remove2(){
    
    if(teach.classList.contains("hidden"))
    {   
        text2.classList.remove("hidden");
        teach.classList.remove("hidden");
    } else{
        teach.classList.add("hidden");
        text2.classList.add("hidden");
    }
    
};


button1.addEventListener("mouseenter", () => {
    box1.style.height = 1100 + "px";


    button1.addEventListener("mouseleave", () => {
        box1.style.height = 835 + "px";
    });
});

button2.addEventListener("mouseenter", () => {
    box2.style.height = 1100 + "px";

    button2.addEventListener("mouseleave", () => {
        box2.style.height = 835 + "px";
    });
});