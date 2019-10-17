const propilBackGround = document.querySelector("#jsPropil");
const propilClose = document.querySelector("#jsPropilClose");

function writeData(){
    console.log(event.target.childNodes[0].innerText);
    console.log(event.target.childNodes[1].innerText);
}

function closePropil(){
    propilBackGround.style.display = "none";
}

function showPropil(){
    propilBackGround.style.display = "flex";
    writeData();
    propilClose.addEventListener("click",closePropil);
}


frendsList.addEventListener("click",showPropil)