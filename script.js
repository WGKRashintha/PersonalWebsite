/*Hamburger toggle*/
const toggleHamburger=document.getElementById("toggle-hamburger");
const navigation=document.getElementsByClassName("navigation")[0];

toggleHamburger.addEventListener("click" , ()=>{
    navigation.classList.toggle("active")
})
/*Hamburger toggle*/

/*Scrolling*/
$("a").click(function(){
    let pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#"+pageId).offset().top - 120}, 500);
});
/*Scrolling*/

/*======================================================================================================================*/

/*Home*/
let textArray=["Follow Me On..."];
let textPosition=0;
let speed=100;

typeWriter = ()=>{
    document.querySelector("#follow-desc-p").innerHTML = textArray[0].substring(0 , textPosition);

    if(textPosition++ != textArray[0].length){
        setTimeout(typeWriter , speed);
    }
}
typeWriter();

/*Home*/

/*======================================================================================================================*/

/*About*/
const readMore=document.getElementById("desc-button-wrap");
const descSpan=document.getElementsByClassName("desc-span")[0];
const skillsDev=document.getElementsByClassName("skills-left")[0];
const contactDev=document.getElementsByClassName("contact")[0];

readMore.addEventListener("click" , ()=>{
    descSpan.classList.toggle("active");

    if(readMore.innerText=="Read Less"){
        readMore.innerText="Read More";
        skillsDev.style.margin="-10rem 0 0 0";
        contactDev.style.margin="3rem 0 0 0";
    }else{
        readMore.innerText="Read Less";
        skillsDev.style.margin="10rem 0 0 0";
        contactDev.style.margin="22rem 0 0 0";
    }
    readMore.style.color="white";
    readMore.style.fontSize="0.9rem";
})
/*About*/

/*======================================================================================================================*/

/*Elements Reveal*/

window.onload = function (){
    const pageAccessedByReload = (
        (window.performance.navigation && window.performance.navigation.type === 1) || window.performance
            .getEntriesByType('navigation')
            .map((nav) => nav.type)
            .includes('reload')
    );

    if(pageAccessedByReload){
        let revealHome=document.getElementsByClassName("reveal-home")[0];

        revealHome.classList.add('active');
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    let revealHome=document.getElementsByClassName("reveal-home")[0];

    revealHome.classList.add('active');
});

window.addEventListener('scroll' , ()=>{
    let reveals=document.querySelectorAll(".reveal");

    for (let i=0; i<reveals.length; i++){
        let windowHeight=window.innerHeight;
        let revealTop=reveals[i].getBoundingClientRect().top;
        let revealsPoint=120;

        if(revealTop < windowHeight - revealsPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
});

/*Elements Reveal*/




