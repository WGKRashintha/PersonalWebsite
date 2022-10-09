/*Hamburger toggle*/
const toggleHamburger=document.getElementById("toggle-hamburger");
const navigation=document.getElementsByClassName("navigation")[0];

toggleHamburger.addEventListener("click" , ()=>{
    navigation.classList.toggle("active")
})
/*Hamburger toggle*/

/*Reveal*/
window.onload = function (){
    const pageAccessedByReload = (
        (window.performance.navigation && window.performance.navigation.type === 1) || window.performance
            .getEntriesByType('navigation')
            .map((nav) => nav.type)
            .includes('reload')
    );

    if(pageAccessedByReload){
        let revealHome=document.getElementsByClassName("reveal")[0];

        revealHome.classList.add('active');
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    let revealHome=document.getElementsByClassName("reveal")[0];

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
/*Reveal*/
