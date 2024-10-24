document.addEventListener("DOMContentLoaded",function(){
const bouton= document.getElementById("zar");
const div=document.getElementById("ram");
bouton.addEventListener("click",function(){
    div.style.display="block" ;
   
    bouton.style.display="none" ;
 })
})
const burger = document.querySelector('.burger');
const mer = document.querySelector('.mer')
 burger.addEventListener('mousehover');()=>{
    mer.classList.toggle('active');}