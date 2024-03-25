const tasbeeh1 = document.getElementById("t1");
const tasbeeh2 = document.getElementById("t2");
const tasbeeh3 = document.getElementById("t3");
const tasbeeh4 = document.getElementById("t4");

const count1 = document.getElementById("c1");
const count2 = document.getElementById("c2");
const count3 = document.getElementById("c3");
const count4 = document.getElementById("c4");

let num1=0;
let num2=0;
let num3=0;
let num4=0;

tasbeeh1.addEventListener('click', (event)=>{
  num1++
  count1.innerText = num1;
  console.log(event.target);
})

tasbeeh2.addEventListener('click', (event)=>{
   num2++
   count2.innerText = num2;
   console.log(event.target);
})

tasbeeh3.addEventListener('click', (event)=>{
    num3++
   count3.innerText = num3;
   console.log(event.target);
})

tasbeeh4.addEventListener('click', (event)=>{
    num4++
   count4.innerText = num4;
   console.log(event.target);
})


