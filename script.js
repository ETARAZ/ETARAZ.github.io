const icon = document.getElementById("icon");
const list = document.getElementById("list");
const close = document.getElementById("close");

icon.addEventListener("click",()=>{
    list.classList.remove("hide");
    list.classList.remove("animate__slideOutRight");
    list.classList.add("animate__slideInLeft");
});

window.addEventListener("click",(e)=>{
    if(e.target===list){
        list.classList.remove("animate__slideInLeft");
        list.classList.add("animate__slideOutRight");
    }
})

close.addEventListener("click",()=>{
        list.classList.remove("animate__slideInLeft");
        list.classList.add("animate__slideOutRight");
})