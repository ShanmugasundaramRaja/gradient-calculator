const tog=document.getElementsByClassName("toggle")
    const style=document.getElementById("style")
    let n=0;
    const color=()=>{
   n+=1;
    if(n%2==0){
        tog[0].classList.replace("fa-toggle-off","fa-toggle-on")}
    else{
        tog[0].classList.replace("fa-toggle-on","fa-toggle-off")}   
    if (style.getAttribute('href') == 'dark.css') {
                style.setAttribute('href', 'light.css');
            } else {
                style.setAttribute('href', 'dark.css');} }
tog[0].addEventListener("click",color)
let lastResult = null;
let lastOperation = null;
function addnum(event) {
 let numberPressed = event.target.innerText
  let result = document.getElementById('result')
if (result.value === "0") {
     result.value = numberPressed
  } else {
    result.value += numberPressed }}
function clearMemory() {
  lastOperation = null;
  lastResult = null;}
function clearResult() {
  document.getElementById('result').value = "0"}
function del() {
  clearMemory()
  clearResult()}
function symbols(event) {
 lastOperation = event.target.innerText
 if(lastResult === null) {
    lastResult = document.getElementById('result').value}
     else {
    executeLastOperation()}
  clearResult()}
function executeLastOperation() {
  let resultNode = document.getElementById('result')
  let currentResult = resultNode.value
 let firstNumber = parseFloat(lastResult)
  let secondNumber = parseFloat(currentResult)
switch(lastOperation) {
    case "+":
      lastResult = firstNumber + secondNumber
      break
 case "-":
    lastResult = firstNumber - secondNumber
      break
case "×":
      lastResult = firstNumber * secondNumber
     break
case "÷":
  lastResult = firstNumber / secondNumber
      break
  }}
function equals() {
  executeLastOperation()
  let resultNode = document.getElementById('result')
  resultNode.value = lastResult
clearMemory()}