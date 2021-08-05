const list=document.querySelector(".list-navbar");
const humb=document.querySelector(".humb");
const closeList=document.querySelector(".close");

window.addEventListener('scroll',()=>{
    list.classList.add("none");
});

humb.addEventListener('click',()=>{
    list.classList.toggle("none");
})
closeList.addEventListener('click',()=>{
    list.classList.toggle("none");
})

