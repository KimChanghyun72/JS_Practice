// //instead let, use const, you can't change varible
// let a = 221;
// const b = a - 5;
// a=4;
// console.log(b);

//String
//const what = "";
//console.log(what);
// const wat = false;//Boolean
//const num = 666; //number
//const fltnum = 55.5;//Float


//const daysOfWeek = 
//camel case.->start with lower, first of each word, use upper.
// const monday = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";

// console.log(monday, tue, wed, thu, fri);

//Array
//const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true];

//console.log(daysOfWeek);
//console.log(daysOfWeek[2]);

//object
//cannot change field. but value of field can change.
//if data from DB, use Array, combine date USE object.
//you can enter object into the array & enter arry into object.
// const People = {
//     name:"Nico",
//     age:33,
//     gender:"Male",
//     isHandsone:true,
//     favMovies:["Along the gods", "LOTR", "Oldboy"],
//     favFood : 
//     [
//         {
//         name:"Kimchi", 
//         fatty:false
//     }
//     , 
//     {
//         name:"Cheese burger", 
//         fatty:true
//     }
// ]
// };
// console.log(People);
// console.log(People.gender);

// People.gender = "Female";
// console.log(People.gender);

// console.log(People.favFood[0].name);

//속성 지정 안해줘도 된다는 것, 공백 쓸때 지정할 필요 없다는 것 신기해.
//그리고 생성자 넣는값 안맞아도 그냥 실행되는 거? 이건 안좋을수도 있겠군
//'', ""둘 다 문자열 넣는데 사용 가능.
//백틱( ` )->???
function sayHello(name, age){
    //console.log('Hello!', name, "you have", age, "years of age\n");
    //console.log(`Hello ${name} you are ${age} years old`);
    return `Hello ${name}, you are ${age} years old`;
}


//sayHello("Nicolkas",15);
//const greetNicolas = sayHello("Nicolas", 14);
// , 가 중요하네. 
const calculator = {
    plus : function(num1, num2){
        return num1+num2;
    },
    minus : function(num1, num2){
        return num1 - num2;
    },
    multiply : function(num1, num2){
        return num1*num2
    },
    divide : function(num1, num2){
        if(num2 != 0){
            num1/num2;
        }
    }
}

//console.log(greetNicolas);
//const plus = calculator.plus(5,5)
//console.log(plus)

//const title = document.getElementById("title");
//  const title = document.querySelector("#title");

// function handleClick(){
//     title.style.color = "blue";
// } 

// title.addEventListener("click", handleClick);

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

// function sayHello(name, age){
//     return `Hello ${name} you are ${age} years old`;
// } 
// const greetNicolas = sayHello("Nicolas", 14)

// console.log(greetNicolas)

// const calculator= {
//     plus : function(a,b){
//         return a + b;
//     }
// }
// //calculator.plus(5,5)
// const plus = calculator.plus(5,5)
// console.log(plus)

//console.log(document.getElementById);
// //const title = document.getElementById("title"); 
// const title = document.querySelector("#title")

// // title.innerHTML = "Hi! From JS";
// // title.style.color = "red";
// // document.title = "I love sweet comics"
// function handleResize(){
//     console.log("I have been resized")
// }
// function handleResize2(event){
// console.log(event)
// }
// function handleClick(){
//     title.style.color = "coral" 
// }
// title.addEventListener("click", handleClick);
// //yourfunction()->바로 호출, yourfunction->너가 원할때 호출
// //window.addEventListener("resize", handleResize2);


// //console.error("Fuck")
// //왜 document 내용은 없다고 하는데 html에 적용은 되는거지?
// //환장하겠군.

//const age = prompt("How old are you");

// if(age>18 && age<21){
//     console.log('you can drink but you should not')
// }else if(age>=21){
//     console.log("go ahead");
// }else{
//     console.log('you cant');
// }

// // if("10"===10){//=== 가 속성까지 다 비교하는건가.
// //     console.log('hi')
// // }else if("10"==="10"){
// //     console.log("lalala");
// // }else{
// //     console.log("ho")
// // }

// // if(20>5 && "nicolas" === "nicolas"){
// //     console.log("yes");
// // }else{
// //     console.log("no");
// // }
// // true && true = true;     
// // false && true = false;   
// // true && false = false;
// // false && false = false;

// //BASIC JS 20 
// //HTML JS DOM event MDN
// const title = document.querySelector("#title");

// const BASE_COLOR =  "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     //console.log(title.style.color);
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.addEventListener("click", handleClick);
// }
// init();

// function handleOffline(){
//     console.log("lala");
// } //MDN에서 실행한 임의의 함수. OFFLINE일 때 내용 출력


// window.addEventListener("offline", handleOffline);

// // JS BASIC 21
// // HTML TO HTML CSS TO CSS JS->logic

// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleClick(){
//     title.classList.toggle(CLICKED_CLASS);
// }//그럼 토글에 들어있는 함수 내용이 뭔지 보려면 어떻게 해야되는데?
// //난 자바가 더 익숙해서 그런가...

// function init(){
//     title.addEventListener("click", handleClick);
// }
// init();