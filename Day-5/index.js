const navbarE1 = document.querySelector(".navbar");

const bottomContainerE1 = document.querySelector(".nav-bottom") 

window.addEventListener("scroll", ()=>{
    if (window.scrollY >bottomContainerE1.offsetTop - navbarE1.offsetHeight-100){
        navbarE1.classList.add("active")
    }else{
        navbarE1.classList.remove("active")
    }
});