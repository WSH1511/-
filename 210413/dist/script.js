var canvas =document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

canvas.width= 400;
canvas.height = 400;

ctx.fillStyle="#fff6d1"
ctx.fillRect(0,0,500,500)

//藍色
ctx.beginPath()
ctx.moveTo(100,0)
ctx.lineTo(300,100)
ctx.lineTo(100,100)
ctx.closePath()
ctx.fillStyle="#39afdd"
ctx.fill()

//黃色
ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(300,100)
ctx.lineTo(100,300)
ctx.closePath()
ctx.fillStyle="#ffd800"
ctx.fill()

//綠
ctx.beginPath()
ctx.moveTo(300,300)
ctx.lineTo(100,300)
ctx.lineTo(300,100)
ctx.closePath()
ctx.fillStyle="#7ccc7c"
ctx.fill()

//紅
ctx.beginPath()
ctx.moveTo(300,400)
ctx.lineTo(300,300)
ctx.lineTo(100,300)
ctx.closePath()
ctx.fillStyle="#d27858"
ctx.fill()