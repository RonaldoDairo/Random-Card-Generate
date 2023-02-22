/* eslint-disable */

//import "../src/style.css";
const btn =document.querySelector('button')
btn.addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelector('#card').removeAttribute('class')
  document.querySelector('#card').classList.add(generateRandomSuit());
  document.querySelector('#card').innerHTML = generateRandomNumber();
})
window.onload = () =>{
  document.querySelector('#card').classList.add(generateRandomSuit());
  document.querySelector('#card').innerHTML = generateRandomNumber();
 
};
let generateRandomNumber = ()=>{
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let indexNumbers = Math.floor(Math.random()*numbers.length);
  return numbers[indexNumbers];
}
let generateRandomSuit = () =>{
      let suit = ["diamond","spade","heart","clud"];
      let indexSuit = Math.floor(Math.random()*suit.length);
      return suit[indexSuit];
}


