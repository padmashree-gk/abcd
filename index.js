
// var a;
// console.log(a);

// const res = require("express/lib/response")

// let a;
//  console.log(a);

// const a;
//  console.log(a);

// var a=10;
//  console.log(a);

// let a=100;
//  console.log(a);

// const a=20;
//  console.log(a);

// var a=30;
//     a=200;
//  console.log(a);

// let a=30;
//     a=300;
//  console.log(a);

// const a=30;
//     a=400;
//  console.log(a);

// var a=30;
//  var  a=200;
//  console.log(a);

// let a=30;
//  let  a=200;
//  console.log(a);


// const a=30;
//  const  a=200;
//  console.log(a);

// var a=30;
//  var  a="hello";
// //  console.log(a);

// var a=30;
//  console.log(a);
//  let b=30;
//  console.log(b);
//  const c=60;
//  console.log(c)
//  console.log(a+b+c)


// console.log(5+5);
// console.log(5+5);
// console.log("6"-5);
// console.log(6+3);
// console.log(5-"z");
// console.log(5+"2");
// console.log(5-"");
// console.log("5"+50-"5");
//  console.log(5+5);
//  console.log("hellooo reshma")
// confirm("reshma");
// prompt()
// document.write("heyyyy")
// document.writeln("hello")
// document.write("akash")





// let obj={
//     userName:"madhan",
//     password:()=>
//     {
//         console.log(this.userName);
//     }
// }
// obj.password()


// let x=()=> console.log("hello")
// x()


// function test (){
//     console.log("heyyyyyyyyyyyy")
// }

// test()


// let x=function(){
//     console.log("bhomiiiiii")
// }
// x()


// let obj={
//          userName:"madhan",
//         password:()=>
//          {
//             console.log(this);
//         }
//      }
//      obj.password()


// var b=10;
// function one(){
//    var c=10;
//    function two (){
//       console.log(b);
//    }
//    return two
// }
// one()()
// var a=100;
// function hey(){
//    var b=20;
//    console.log(b)
// }
// hey()



//Arrays//



// let arr=[10,20,30,40]
// arr.push(20)
// console.log(arr);

// let arr=[10,20,30,40]
// arr.pop()
// console.log(arr);

// let arr=[10,20,30,40]
// arr.unshift(200)
// console.log(arr);

// let arr=[10,20,30,40]
// arr.shift()
// console.log(arr);

// let arr=[10,20,30,40]
// arr.slice(1,2)
// console.log(arr)


// let arr=[10,20,30,40]
// arr.slice(1,2)
// console.log(arr)




// let arr=[100,200,300,400]
// let fil=arr.filter((x)=>{
//    return x>100

// })
// console.log(fil)


// let arr=[100,200,300,400]
// let res=[]
// for(let a=0;a<arr.length;a++)
// {
//    if(arr[a]<2000){
//       res.push(arr[a])
//    }
// }
// console.log(res)

//map//
// let gst=[]
// for(let a=0;a<res.length;a++){
//    gst.push(arr[a]*1.18)
// }
// console.log(gst);


// let total=0;
// for(let a=0;a<gstftg)




//OBJECTS//
//LITERALS//

// let obj={
//    userNme:"sam"
// }
//    console.log(obj);


//using this keyword//


// let x=new Object()
// x.username="sam"
// x.password=12345
// x.phone=9731934020
// console.log(x);




//PASSING OBJECT AS A VALUE //
// let obj ={
//    Studentid :129,
//    studentname:"padmashree",
//    studentphone:{

//                   personal:9731934,
//                   parent:8050566

//    }
// }
// console.log(obj.studentphone.personal);

//PASSSING FUNCTION AS A VALUE TO A KEY OBJECT//
// let obj={
//    username:"priysa",
//    address:function(){
//       var home="#345 2nd stage "
//       var office="#7 stage"
//       console.log(office);
//    }
// }
// obj.address()


//OBJECT METHOD OBJECT BUILTIN METHODS//

// let colours={
//    col1:"black",
//    col2:"green",
//    col3:"purple",
//    col4:"white",
//    col5:"yellow"
// }
// console.log(Object.keys(colours));
// console.log(Object.values(colours));
// console.log(Object.entries(colours));

// colours.col1="red"
// colours.col6="pink"


// 07/02/2023

// setTimeout(()=>
// {
//     console.log("hello")
// },3000)


// setTimeout(()=>
// {
//     console.log("hello")
// },2000)

// setTimeout(()=>
// {
//     console.log("heyyy")
// },4000)


// setInterval(()=>
// {
//     console.log("maccc")
// },3000)

//DATE//


// let x=new Date()
// console.log(x.getDay());
// console.log(x.getMonth());
// console.log(x.getFullYear());
// console.log(x.getHours());
// console.log(x.getDate());


// let x=new Date()
// let day=x.getDay()
// let y =["sunday","monday","tuesday"]
// console.log(y[day]);

// let x=new Date()
// let day=x.getDay()
// switch(day){
//     case 0:{
//         console.log("sumday");
//     }
//     break;
//     case 1:{
//         console.log("monday");
//     }
//     break;
//     case 2:{
//         console.log("muesday");
//     }
// }

// console.log(Math.sqrt(4));
// console.log(Math.cbrt(27));
// console.log(Math.ceil(11.1));
// console.log(Math.floor(4.5));
// console.log(Math.floor(Math.random()*100000));




// let x=new Date()
// let month=x.getMonth()
// switch(month){
//     case 0:{
//         console.log("jan");
//     }
//     break;
//     case 1:{
//         console.log("feb");
//     }
//     break;
//     case 2:{
//         console.log("march");
//     }
//     case 3:{
//         console.log("april");
//     }
//     break;
//     case 4:{
//         console.log("may");
//     }
//     break;
//     case 5:{
//         console.log("jun");
//     }
//     case 6:{
//         console.log("sumday");
//     }
//     break;
//     case 7:{
//         console.log("monday");
//     }
//     break;
//     case 8:{
//         console.log("muesday");
//     }
//     case 9:{
//         console.log("sumday");
//     }
//     break;
//     case 10:{
//         console.log("monday");
//     }
//     break;
//     case 11 :{
//         console.log("muesday");
//     }
// }



// let x=new Date()
// let month=x.getMonth()
// let y =["jan","feb","march"]
// console.log(y[month]);




// let x=new Date()
// let month=x.getMonth()
// if (month==0){
//     console.log("jan");
// }
// else if(month==1){
//     console.log("feb");
// }
// else if(month==2){
//     console.log("march");
// }
// else if(month==3){
//     console.log("april");
// }
// else if(month==4){
//     console.log("may"); 
// }
// else if(month==5){
//     console.log("jun");
// }
//  else if(month==6){
//     console.log("july");

//  }
//  else if(month==7){
//     console.log("aug");
//  }
//  else if(month==8){
//     console.log("sep");
// }
// else if(month==9){
//     console.log("oct"); 
// }
// else if(month==10){
//     console.log("nov");
// }
//  else if(month==11){
//     console.log("dec");

//  }
 

// let table=document.createElement("table")
// let tr1=document.createElement("tr")
// let tr2=document.createElement("tr")
// let tr3=document.createElement("tr")
// let td1=document.createElement("td")
// let td2=document.createElement("td")
// let td3=document.createElement("td")
// let td4=document.createElement("td")
// let td5=document.createElement("td")
// let td6=document.createElement("td")
// let td7=document.createElement("td")
// let td8=document.createElement("td")
// let td9=document.createElement("td")


// td1.innerText="1"
// td2.innerText="2"
// td3.innerText="3"
// td4.innerText="4"
// td5.innerText="6"
// td6.innerText="5"
// td7.innerText="7"
// td8.innerText="8"
// td9.innerText="9"

// document.body.appendChild(table)
// table.appendChild(tr1)
// table.appendChild(tr2)
// table.appendChild(tr3)
// tr1.appendChild(td1)
// tr1.appendChild(td2)
// tr1.appendChild(td3)
// tr2.appendChild(td4)
// tr2.appendChild(td5)
// tr2.appendChild(td6)
// tr3.appendChild(td7)
// tr3.appendChild(td8)
// tr3.appendChild(td9)



// let h1=document.getElementById("h1test")
// h1.style.display.color="red"
// h1.style.border="20px solid blue"
// h1.style.backgroundColor="blue"
// h1.style.padding="20px"
// h1.style.margin="20px"


// let btn=document.querySelector('button')
// btn.onclick=()=>{
//     document.body.style.backgroundColor="yellow"
// }



// let btn2=document.querySelector("button")
// btn2=()=>{
//     console.log("helo");
// }

let btn=document.getElementById("bike")
btn.addEventListener("click",()=>{

    let val1=document.getElementById('val1').value
    let res1=document.getElementById("res1")
    res1.innerText="total:"+10*val1+"/-"
})

let btn1=document.getElementById("car")
btn1.addEventListener("click",()=>{

    let val4=document.getElementById('val2').value
    let res4=document.getElementById("res4")
    res4.innerText="total:"+20*val4+"/-"
})

let btn3=document.getElementById("auto")
btn3.addEventListener("click",()=>{

    let val5=document.getElementById('val5').value
    let res6=document.getElementById("res6")
    res6.innerText="total:"+30*val5+"/-"
})


// let color=prompt("enter the color")
// let btn=document.querySelector("button")
// btn.innerText=color
// btn.addEventListener("click",()=>{
//     btn.style.backgroundColor=color
//     document.body.style.backgroundColor=color
// })
// localStorage.setItem("username","padma")
// localStorage.setItem("password",123)


// let data=localStorage.getItem("username")
// let data2=localStorage.getItem("password")
// console.log(data,data2);


// let promise=new Promise((resolve,reject)=>{


// let iswater=false
// if(iswater===true){
//     resolve(document.body.style.backgroundColor="green")
// }
// else{
//     reject(document.body.style.backgroundColor="red")
// }
// })
// promise.then((x)=>console.log(x)).catch((y)=>console.log(y))