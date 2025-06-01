let procesorImage = document.querySelector("#p");
let ramImage = document.querySelector("#r");
let zasilaczImage = document.querySelector("#z");
let cardImage = document.querySelector("#c");

let dyskImage = document.querySelector("#h")
let ssdDyskImage = document.querySelector("#s")
let monitorImage = document.querySelector("#m")
let printerImage = document.querySelector("#pr")



let parametryProcesora = document.querySelector("#l");
let parametryValue = document.querySelector("#list1");

let parametryRam = document.querySelector("#l2");
let ramValue = document.querySelector("#list2");

let parametryZasilacza = document.querySelector("#l3");
let zasilaczValue = document.querySelector("#list3");

let parametryKarty = document.querySelector("#l4");
let cardValue = document.querySelector("#list4");

let parametryHdd = document.querySelector("#l5")
let hddValue = document.querySelector("#list5")

let parametrySsd = document.querySelector("#l6")
let ssdValue = document.querySelector("#list6")

let parametryScreen = document.querySelector("#l7")
let screenValue = document.querySelector("#list7")

let parametryPrinter = document.querySelector("#l8")
let printerValue = document.querySelector("#list8")


function showProcesor(){
    if(parametryProcesora.classList.contains("hidden")){
        parametryProcesora.classList.remove("hidden");
        parametryValue.classList.remove("hidden");

    }else{
        parametryProcesora.classList.add("hidden");
        parametryValue.classList.add("hidden");
    };
   
    
};


function showRam(){
    if(parametryRam.classList.contains("hidden")){
        parametryRam.classList.remove("hidden");
        ramValue.classList.remove("hidden");

    }else{
        parametryRam.classList.add("hidden");
        ramValue.classList.add("hidden");
    };
   
    
};

function showZasilacz(){
    if(parametryZasilacza.classList.contains("hidden")){
        parametryZasilacza.classList.remove("hidden");
        zasilaczValue.classList.remove("hidden");

    }else{
        parametryZasilacza.classList.add("hidden");
        zasilaczValue.classList.add("hidden");
    };
   
    
};

function showCard(){
    if(parametryKarty.classList.contains("hidden")){
        parametryKarty.classList.remove("hidden");
        cardValue.classList.remove("hidden");

    }else{
        parametryKarty.classList.add("hidden");
        cardValue.classList.add("hidden");
    };
   
    
};


function showHdd(){
    if(parametryHdd.classList.contains("hidden")){
        parametryHdd.classList.remove("hidden");
        hddValue.classList.remove("hidden");

    }else{
        parametryHdd.classList.add("hidden");
        hddValue.classList.add("hidden");
    };
    
};

function showSsd(){
    if(parametrySsd.classList.contains("hidden")){
        parametrySsd.classList.remove("hidden");
        ssdValue.classList.remove("hidden");

    }else{
        parametrySsd.classList.add("hidden");
        ssdValue.classList.add("hidden");
    };
    
};

function showScreen(){
    if(parametryScreen.classList.contains("hidden")){
        parametryScreen.classList.remove("hidden");
        screenValue.classList.remove("hidden");

    }else{
        parametryScreen.classList.add("hidden");
        screenValue.classList.add("hidden");
    };
    
};


function showPrinter(){
    if(parametryPrinter.classList.contains("hidden")){
        parametryPrinter.classList.remove("hidden");
        printerValue.classList.remove("hidden");

    }else{
        parametryPrinter.classList.add("hidden");
        printerValue.classList.add("hidden");
    };
    
};


procesorImage.addEventListener("click", showProcesor);
ramImage.addEventListener("click", showRam);
zasilaczImage.addEventListener("click", showZasilacz);
cardImage.addEventListener("click", showCard);
dyskImage.addEventListener("click", showHdd);
ssdDyskImage.addEventListener("click", showSsd)
monitorImage.addEventListener("click", showScreen)
printerImage.addEventListener("click", showPrinter)

