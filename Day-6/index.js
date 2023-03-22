 const containerE1 = document.querySelector(".container");

 for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div")
    colorContainerE1.classList.add("color-container")
    containerE1.appendChild(colorContainerE1)  
 }

 const colorContainerE1s = document.querySelectorAll(".color-container")

 generatorColor()
 function generatorColor(){
     colorContainerE1s.forEach((colorContainerE1)=>{
        const newColorcode = randomColor()
        colorContainerE1.style.backgroundColor = '#'+newColorcode
        colorContainerE1.innerText = "#"+newColorcode
     })
 }

 function randomColor(){
    const totalChar = "123456789abcdef"
    let colorCode = ""
    for (let index = 0; index < 6; index++) {
        const randomNum = Math.floor(Math.random()*totalChar.length) 
        colorCode += totalChar.substring(randomNum, randomNum+1)          
    }
    return colorCode
 }