const propilBackGround = document.querySelector("#jsPropil");
const propilClose = document.querySelector("#jsPropilClose");
const propilNamd = document.querySelector("#jsPropilName");
const propilState = document.querySelector("#jsStayeMessage");

function writeData(){
    propilNamd.innerHTML = event.target.childNodes[0].innerHTML;
    propilState.innerHTML = event.target.childNodes[1].innerHTML;
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