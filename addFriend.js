
const addFriend = document.querySelector("#jsAddFriend");
const backGround = document.querySelector("#jsBackGround");
const message = document.querySelector("#jsMessage");
const askAdd = document.querySelector("#jsAskAdd");
const newInfo = document.querySelector("#jsGetInfo")
const addButton = document.querySelector("#jsAddButton");
const frendsList = document.querySelector("#jsFrendsList");

let friendArr=[];
 
const handleData = {
     add:function(name,currentMassage){
        const friendData ={
            name:name,
            currentMassage:currentMassage,
        }
        friendArr.push(friendData);
        handleData.save();
        handleData.print(friendData);
     },
     lode:function(){
        const list = JSON.parse(localStorage.getItem("listDate"));
        if(list !==null){
        list.forEach(element => {
        friendArr.push(element);
        });
        }   
        friendArr.forEach(element => {
        handleData.print(element);
        });
     },
     save:function(){
        localStorage.setItem("listDate",JSON.stringify(friendArr));
     },
     print:function(element){
        const li = document.createElement("li");
        const img = document.createElement("img");
        const nameSpan = document.createElement("span");
        const stateSpan = document.createElement("span");
        const ul = document.querySelector("#jsFrendsList");
        
        img.classList.add("propil");
        nameSpan.classList.add("name");
        stateSpan.classList.add("stateMessage");
    
        nameSpan.innerText = element.name;
        stateSpan.innerText = element.currentMassage;
        img.src = "프로필 사진.png";
        li.classList.add("hover");
    
        li.appendChild(nameSpan);
        li.appendChild(stateSpan);
        li.appendChild(img);
        ul.appendChild(li);         
     }
 }


function askFrind( ){
    event.preventDefault();
    const name = newInfo.childNodes[1].value;
   askAdd.innerText = `${name} 가 추가되었습니다.`;
}
   
function hideAddFrend(){
   if(event.target.className == "backGround"){
   backGround.style.display = "none";
   }
}

function pushButton(){
    const nweName = newInfo.childNodes[1].value;
    const newState = newInfo.childNodes[3].value;
    handleData.add(nweName,newState);
    askFrind();
    newInfo.childNodes[1].value = "";
    newInfo.childNodes[3].value = "";
    
    //입력데이터 저장,저장된 데이터 출력
}

function show(){
    backGround.style.display = "flex";
    backGround.addEventListener("click",hideAddFrend);//배경을 클릭시 친구추가창 사라짐
    addButton.addEventListener("click",pushButton);//친구추가 버튼 누루면
}
handleData.lode();
addFriend.addEventListener("click",show); // 친구추가창 열기

