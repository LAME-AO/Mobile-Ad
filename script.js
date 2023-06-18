var circle=document.getElementById("circle");
var upbtn=document.getElementById("upbtn");
var downtbn=document.getElementById("downbtn");
var rotateval = circle.style.transform;
var rotatesum;
upbtn.onclick= function (){
     rotatesum = rotateval + "rotate(-90deg)";
     circle.style.transform= rotatesum;
     rotateval = rotatesum;  
}
downbtn.onclick= function (){
    rotatesum = rotateval + "rotate(90deg)";
    circle.style.transform= rotatesum;
    rotateval = rotatesum;  
}