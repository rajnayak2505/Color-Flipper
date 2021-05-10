// document.body.style.backgroundColor = "red";

const bgcolor = document.getElementById('bgcolor')
const btn = document.getElementById('btn')
const colorCode = document.getElementById('colorcode')

btn.addEventListener('click', randomColor)

const colorArr = ["#f55c47", '#ffd56b', "#34656d", "#02475e" ]


function randomColor(){
  const randomind = Math.floor(Math.floor(Math.random() * (colorArr.length)))
  bgcolor.style.backgroundColor = colorArr[randomind];
  colorCode.innerHTML = colorArr[randomind];
  colorcode.style.color = colorArr[randomind];
  
  
}

