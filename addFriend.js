
const addFriend = document.querySelector("#jsAddFriend");
const backGround = document.querySelector("#jsBackGround");
const message = document.querySelector("#jsMessage");
const askAdd = document.querySelector("#jsAskAdd");
const newInfo = document.querySelector("#jsGetInfo")
const addButton = document.querySelector("#jsAddButton");
const frendsList = document.querySelector("#jsFrendsList");

let friendArr=[];

function addFriendList(name,currentMassage){
    //세로운 데이터를 배열에 저장한다
    const friendData ={
        name:name,
        currentMassage:currentMassage,
    }
    friendArr.push(friendData);
    saveList();
    printList(friendData);// 세로추가된 객체
}

function lodeData(){
    //저장되어있는 데이터를 불러배열로 만든다.
   
    const list = JSON.parse(localStorage.getItem("listDate"));
        if(list !==null){
        list.forEach(element => {
        friendArr.push(element);
        });
    }   
    friendArr.forEach(element => {
        printList(element);
    });
    
    
}

function saveList(){
    //friendArr 를 loclaStorage에 저장
        localStorage.setItem("listDate",JSON.stringify(friendArr));
    } 

function printList(element){
    //이름과 상테 메시지로 프로필을 만든다
   
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
    img.src = "file:///C:/Users/%EC%88%98%EB%A3%8C%ED%95%98%EC%9E%90/Desktop/work/porjact/kakaotalk/%ED%94%84%EB%A1%9C%ED%95%84%20%EC%82%AC%EC%A7%84.png";
    li.classList.add("hover");

    li.appendChild(nameSpan);
    li.appendChild(stateSpan);
    li.appendChild(img);
    ul.appendChild(li);
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
    newInfo.childNodes[1].value = "";
    newInfo.childNodes[3].value = "";
    askFrind();
    addFriendList(nweName,newState);
    
    //입력데이터 저장,저장된 데이터 출력
}

function show(){
    backGround.style.display = "flex";
    backGround.addEventListener("click",hideAddFrend);//배경을 클릭시 친구추가창 사라짐
    addButton.addEventListener("click",pushButton);//친구추가 버튼 누루면
}
lodeData();

addFriend.addEventListener("click",show); // 친구추가창 열기

