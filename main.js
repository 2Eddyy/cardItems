

    // let arr=[1,23,8];

    // for (let i=0;i<arr.length;i++){
    //     result=arr[i]*3;
    //     console.log(result);
    //     document.getElementById('demo').innerHTML+=result+'<br>';
    // }

//     var parent=document.getElementById('demo');

//     var child=document.createElement('table');

//     child.setAttribute('border','1')
   
//     var child1=document.createElement('tr');

//     var child2=document.createElement('th');

// var child3=document.createElement('th');
 
// var input=document.createElement('input');
//     child2.innerHTML='Heading';

//     child3.appendChild(input);
//     child.appendChild(child1)
//     child1.appendChild(child2)
//      child1.appendChild(child3)
    
//      function myfunction(){
//         var result= document.getElementById('parent').innerHTML=parent.appendChild(child);
//         console.log(result);
       
//      }
   

//star triangle in javascript 
// var a=10;
// var str="";

// for(let i=0;i<=a;i++){            // call full function 
//     for(let j=1;j<=a-i;j++){   //call of empty string
//         str+=" "
//     }
//     for(let k=0;k<=1*i-1;k++){
//         str+="*"                    // call of star 
//     }
//     str+="\n";
// }
//       console.log(str);  

// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car.type);

// const hour = new Date().getHours(); 
// if (hour < 12) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }
//   console.log(greeting);


// callback function
// function multi(something) {
//     console.log(something);
//   }
  
//   function result(num1, num2, myCallback) {
//     let sum = num1 * num2;
//     myCallback(sum);
//   }
  
//   result(5, 5, multi);


// function greet(name){
//     console.log('hi Mr.'+name);
// }
// greet('eddy');


// //callback function example
// function greet(name,callback){
//     console.log('Hi Mr.'+name);node mai.js
//     callback();
// }
// function callme(){
//     console.log('im back');
// }
// greet('eddy',callme);


// //callback funtion delay

// function myfunction(){
//     console.log('hello eddy');
// }
// function myfunction1(name){
//     console.log(' how are you'+" "+name);
// }
// setTimeout(myfunction,3000);
// myfunction1("Mr.Eddy")


// // callback function hell

// function a(b){
//     result=256*9;
//     console.log(result);
//     b();
// }
// a(b);
// function b(){
//     result1=56*7;
//     console.log(result1);
//     c();  
// }
// setTimeout(()=>{
//   result4=65*9;
//   console.log(result4);

//                                  // finished function then call settimeout
// },1000);
// setTimeout(()=>{
//   result5=677*3;
//   console.log(result5);
// },0);
// function c(){
//     result2=345*9;
//     console.log(result2);
//     d();
// }
// function d(){
//     result3=67*7;
//     console.log(result3);
// }




// // function call promise method

// const sample=()=>{
//     let x=15;
//     return new Promise((resolve,reject)=>{
//         if(x==17){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     });
// };
// sample()
// .then(()=> console.log('success'))
// .catch((err)=>{
// console.log('error');
// });


// for(var i=0;i<5;i++){
//  setTimeout(()=>{
// console.log(i);
//  },1000);
// }

// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//    console.log(i);
//     },3000);
//    }

  //  let array = [1, 2, 3, 4, 5];
    
  //  for(let i = 0; i < array.length; i++) {
  //    setTimeout(() => {
  //      console.log(array[i])
  //    }, 3000);
  //  }


//promise all one function err return err
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('one'), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('two'), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('three'), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('four'), 4000);
// });
// // const p5 = new Promise((resolve, reject) => {
// //   reject(new Error('reject'));
// // });

// // Using .catch:
// Promise.all([p1, p2, p3, p4])
// .then(values => {
//   console.log(values);
// })
// .catch(error => {
//   console.log(error.message)
// });

const products=[
  {
    id:1,
    name:'shose',
    prize:2000,
    qty:0
  },
  {
    id:2,
    name:'Sports shose',
    prize:2000,
    qty:0
  },
  {
    id:3,
    name:'Trackpant',
    prize:2000,
    qty:0
  },
  {
    id:4,
    name:'T-shirts',
    prize:2000,
    qty:0
  },
  {
    id:5,
    name:'shorts',
    prize:2000,
    qty:0  
  },
];

let carditems=[];

function cardItems(){
  var result=carditems.push(products.find(x=>x.id===1));
  // console.log(result);
  var result1=carditems.push(products.find(x=>x.id===3));
  // console.log(result1);
  console.log(carditems);
}

function removeCard(){
  carditems=[];
  console.log(carditems);
}

function addToCart(){
  var sample1=products.find(x=>x.id===1)
  products.map(y=>y.qty++);
  // console.log(samp);
  console.log(sample1);
  
}


function addToCart1(){
  var sample2=products.find(z=>z.id===3)
 
  console.log(sample2);
  
}

