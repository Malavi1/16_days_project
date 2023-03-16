const num1 =Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

let score =JSON.parse(localStorage.getItem("score"));

const scoreE1 = document.getElementById("score")

if (!score){
    score = 0;
}

scoreE1.innerText = `score: ${score}`

const questionE1 = document.getElementById("question");

const inputE1 = document.getElementById("input")

const formE1 = document.getElementById("form")

questionE1.innerText = `What is ${num1} multipled by ${num2}?`

const conrretAns = num1*num2

formE1.addEventListener("submit",()=>{
    const userAns = +inputE1.value
    if (userAns === conrretAns){
        score++
        updateLocalstorage()
    }else{
        score--
        updateLocalstorage()
    }
})
function updateLocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}


