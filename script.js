let close = document.querySelector(".close");
let att = document.querySelector(".attention");
close.addEventListener("click", (e)=>{
e.preventDefault();
att.style.display = "none";
});