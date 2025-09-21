const button=document.getElementById("btn");
const nav=document.querySelector(".nav");
const menu=document.querySelector(".a");
let name=document.querySelector(".name").value;
let email=document.querySelector(".email").value;
let select=document.querySelector("#select").value;
let btn=document.querySelector(".submit")
button.addEventListener("click",()=>{
  nav.classList.toggle("show");
})
btn.addEventListener("click",()=>{
  name="";
  email="";
  select="";
})
