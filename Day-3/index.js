const btnE1 = document.querySelector(".btn")

btnE1.addEventListener("mouseover", (even)=>{
    const x = (even.pageX - btnE1.offsetLeft);
    const y = (even.pageY - btnE1.offsetTop);

    btnE1.style.setProperty("--xPos" ,x + "px")
    btnE1.style.setProperty("--yPos" ,y + "px")
})