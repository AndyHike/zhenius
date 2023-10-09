let close = document.querySelector(".close");
let att = document.querySelector(".attention");
let sec = document.querySelector(".section");
let text = document.querySelector(".text_about");
console.log(sec.getBoundingClientRect().top-50);
const  mamai = function(){
    close.style.position = "relative";
    att.style.height = "0px";
    att.style.width = "0px";
    att.style.opacity = "0"
    
    }
sec.addEventListener("click", (e)=>{
    e.preventDefault();
    sec.style.transform = `translateY(${sec.style.top}px)`;
if(att.style.display != "none"){
   mamai();
}
fetch("text/alltext.JSON")
.then(response => response.text())
.then(data => {
  // Опрацьовуйте дані з файлу тут
  text.innerText = JSON.parse(data).text;
  console.log(JSON.parse(data).text);
  text.classList.add("text_about_full");
})

})
close.addEventListener("click", mamai);
att.addEventListener('transitionend', () => {
    att.remove();
  });
