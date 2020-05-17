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