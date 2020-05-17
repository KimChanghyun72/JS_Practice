//const title = document.getElementById("title");
 const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "blue";
} 

title.addEventListener("click", handleClick);

 //handleResize -> 내가 원하는 시점에 함수 호출, 
//handleResize()->지금 바로 함수호출
// window.addEventListener("resize", handleResize);

// function handleResize(event){
//     console.log(event);
    //console.log("I have been resized")
//}


 // title.innerHTML = "Hi! From JS"; 
// title.style.color = 'red';
// Document.title = "I own you now";


//자바스크립트는 이벤트에 반응하기 위해 만들어졌어.
//DOM ->내 페이지에서 선택한 것은 자바스크립트를 통해 객체가 된다.
//되게 JAVA에서 배웠던 인터페이스? 하고 유사하다고 생각행.