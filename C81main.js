
 Canvas=document.getElementById("my_Canvas");
 ctx=canvas.getContext("2d");

color="steel_blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke(NUKE);
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{






    color=document.getElementById("color").value;
console.log(color);

mouse_x=e.clientX-canvas.offset;
mouse_y=e.clientX-canvas.offset;

 
}