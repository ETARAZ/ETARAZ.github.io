$(function() {

window.addEventListener("scroll",function(){
    $(".contact_box").scrollTop($(window).scrollTop());
})
const icon = document.getElementById("icon");
const list = document.getElementById("list");
const close = document.getElementById("close");
const container=document.querySelector('.container');
const contact=document.querySelector('.contact');
const box=document.querySelector('.contact_box');
const talk=document.querySelector('.talk');
const contact_form=document.querySelector('.contact_form');
const token="b290e510-3682-4ed8-94f5-ea4f195804bf";

document.body.onload=() =>{
    var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
container.style.height=`${height}px`;
}

const fade=(e)=>{

$(e).fadeIn(function() {

setTimeout(()=> {
        $(this).fadeOut();
    },3000);


});

}


talk?.addEventListener("click",()=>{
    box.classList.remove("hide_contact");
    box.classList.remove("animate__slideOutRight");
    box.classList.add("animate__slideInLeft");
    $(".contact_box").scrollTop($(window).scrollTop());
});
contact.addEventListener("click",()=>{
    box.classList.remove("hide_contact");
    box.classList.remove("animate__slideOutRight");
    box.classList.add("animate__slideInLeft");
    $(".contact_box").scrollTop($(window).scrollTop());

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

$('.contact_close').on("click",()=>{
    box.classList.remove("animate__slideInLeft");
    box.classList.add("animate__slideOutRight");
})

contact_form.addEventListener('submit',function(e){
    e.preventDefault();
    const name=this.elements["name"].value.trim();
    const email=this.elements["email"].value.trim();
    const message=this.elements["message"].value.trim();
    $(".contact_input").prop("disabled",true);
    $(".contact_btn").text("Loading..");
    $(".contact_btn").prop("disabled",true);

    Email.send({
    SecureToken : token,
    To : 'etarazenr14@gmail.com',
    From : email,
    Subject : "Customer call",
    Body : `${message}<br>${name}`,
}).then((msg)=>{
    if(msg.trim().toLowerCase()==="ok"){
    fade($(".success"));
    $(".contact_input").prop("disabled",false);
    $(".contact_btn").text("Submit");
    $(".contact_btn").prop("disabled",false);
        return true;
    }

    fade($(".danger"));
} )

})








});