const bgcolor = document.getElementById('bgcolor')
const btn = document.getElementById('btn')
const colorCode = document.getElementById('colorcode')

const colorArr = ["#f55c47", '#ffd56b', "#34656d", "#02475e" ]

btn.addEventListener('click', randomColor)

function randomColor(){
  const randomind = Math.floor(Math.floor(Math.random() * (colorArr.length)))
  bgcolor.style.backgroundColor = colorArr[randomind];
  colorCode.innerHTML = colorArr[randomind];
  colorcode.style.color = colorArr[randomind];
}

