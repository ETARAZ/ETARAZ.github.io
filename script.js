const list=document.querySelector(".list-navbar");
const humb=document.querySelector(".humb");
const closeList=document.querySelector(".close");
document.documentElement.style.setProperty('--animate-duration', '0.5s');
let i=0;
window.addEventListener('scroll',()=>{
    list.classList.remove("animate__slideInLeft");
    list.classList.add("animate__slideOutLeft"); 
});

humb.addEventListener('click',()=>{
    if(i==0){
        list.classList.remove("hidden");
        i=1;
    }
    list.classList.remove("animate__slideOutLeft");
    list.classList.add("animate__slideInLeft");

});
closeList.addEventListener('click',()=>{
    list.classList.remove("animate__slideInLeft");
    list.classList.add("animate__slideOutLeft");
})

