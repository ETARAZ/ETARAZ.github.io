const icon = document.getElementById("icon");
const list = document.getElementById("list");
const close = document.getElementById("close");
const container=document.querySelector('.container');
const contact=document.querySelector('.contact');
const box=document.querySelector('.contact_box');
const talk=document.querySelector('.talk');
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
container.style.height=`${height}px`;

talk?.addEventListener("click",()=>{
    box.classList.remove("hide_contact");
    box.classList.remove("animate__slideOutRight");
    box.classList.add("animate__slideInLeft");
});
contact.addEventListener("click",()=>{
    box.classList.remove("hide_contact");
    box.classList.remove("animate__slideOutRight");
    box.classList.add("animate__slideInLeft");
});
icon.addEventListener("click",()=>{
    list.classList.remove("hide");
    list.classList.remove("animate__slideOutRight");
    list.classList.add("animate__slideInLeft");
});

window.addEventListener("click",(e)=>{
    if(e.target===list && screen.width<=768){
        list.classList.remove("animate__slideInLeft");
        list.classList.add("animate__slideOutRight");
    }
    if(e.target===box){
        box.classList.remove("animate__slideInLeft");
        box.classList.add("animate__slideOutRight");
    }
})

close.addEventListener("click",()=>{
        list.classList.remove("animate__slideInLeft");
        list.classList.add("animate__slideOutRight");
})