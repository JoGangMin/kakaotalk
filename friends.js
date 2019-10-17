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
    handleData.print(element);
});
search.childNodes[1].value
}

else {
    friendArr=[]
    frendsList.innerHTML = "";
    handleData.lode();
}
}

search.addEventListener("keyup",searchName);