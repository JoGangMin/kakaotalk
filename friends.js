const search = document.querySelector("#searchName");


function searchName(){
event.preventDefault();

const nameList = JSON.parse(localStorage.getItem("listDate"));
const reQuestName = search.childNodes[1].value; // 입력값

if(reQuestName!==""){
    const result = nameList.filter( function(name) {
    return name.name.indexOf(reQuestName)>=0;
})
friendArr=[]
frendsList.innerHTML = "";
result.forEach(element => {
    printList(element);
});
search.childNodes[1].value
}

else {
    friendArr=[]
    frendsList.innerHTML = "";
    lodeData();
}
}

search.addEventListener("keyup",searchName);