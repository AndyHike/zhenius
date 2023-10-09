let close = document.querySelector(".close");
let att = document.querySelector(".attention");
let sec = document.querySelector(".section");
let text = document.querySelector(".text_about");

sec.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(sec.getBoundingClientRect().top-50);
    sec.style.transform = `translateY(-${sec.getBoundingClientRect().top-90}px)`;
/* if(att.style.display != "none"){
    att.style.display = "none";
} */
fetch("text/alltext.JSON")
.then(response => response.text())
.then(data => {
  // Опрацьовуйте дані з файлу тут
  text.innerText = JSON.parse(data).text;
  console.log(JSON.parse(data).text);
  text.classList.add("text_about_full");
})

})
close.addEventListener("click", (e)=>{
e.preventDefault();
close.style.position = "relative";
att.style.height = "0px";
att.style.width = "0px";
att.style.opacity = "0"

});
att.addEventListener('transitionend', () => {
    att.remove();
  });
