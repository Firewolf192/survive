let procesorImage = document.querySelector("#p");
let ramImage = document.querySelector("#r");
let zasilaczImage = document.querySelector("#z");
let cardImage = document.querySelector("#c");



let parametryProcesora = document.querySelector("#l");
let parametryValue = document.querySelector("#list1");

let parametryRam = document.querySelector("#l2");
let ramValue = document.querySelector("#list2");

let parametryZasilacza = document.querySelector("#l3");
let zasilaczValue = document.querySelector("#list3");

let parametryKarty = document.querySelector("#l4");
let cardValue = document.querySelector("#list4");


function showProcesor(){
    if(parametryProcesora.classList.contains("hidden")){
        parametryProcesora.classList.remove("hidden");
        parametryValue.classList.remove("hidden");

    } else{
        parametryProcesora.classList.add("hidden");
        parametryValue.classList.add("hidden");
    };
   
    
};


function showRam(){
    if(parametryRam.classList.contains("hidden")){
        parametryRam.classList.remove("hidden");
        ramValue.classList.remove("hidden");

    } else{
        parametryRam.classList.add("hidden");
        ramValue.classList.add("hidden");
    };
   
    
};

function showZasilacz(){
    if(parametryZasilacza.classList.contains("hidden")){
        parametryZasilacza.classList.remove("hidden");
        zasilaczValue.classList.remove("hidden");

    } else{
        parametryZasilacza.classList.add("hidden");
        zasilaczValue.classList.add("hidden");
    };
   
    
};

function showCard(){
    if(parametryKarty.classList.contains("hidden")){
        parametryKarty.classList.remove("hidden");
        cardValue.classList.remove("hidden");

    } else{
        parametryKarty.classList.add("hidden");
        cardValue.classList.add("hidden");
    };
   
    
};


procesorImage.addEventListener("click", showProcesor);
ramImage.addEventListener("click", showRam);
zasilaczImage.addEventListener("click", showZasilacz);
cardImage.addEventListener("click", showCard)