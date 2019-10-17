const propilBackGround = document.querySelector("#jsPropil");
const propilClose = document.querySelector("#jsPropilClose");

function closePropil(){
    propilBackGround.style.display = "none";
}

function showPropil(){
    propilBackGround.style.display = "flex";
    console.log(event.target);
    propilClose.addEventListener("click",closePropil);
}


frendsList.addEventListener("click",showPropil)