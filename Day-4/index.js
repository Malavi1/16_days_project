const textareaE1  =document.getElementById("textarea")

const totalCharE1 = document.getElementById("span-total-char")

const remCharE1 = document.getElementById("span-rem-char")

textareaE1.addEventListener("keyup",()=>{
    updateCounter()
})
function updateCounter(){
    totalCharE1.innerText = textareaE1.value.length
    remCharE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length
    if (textareaE1.value.length <= 99) {
        totalCharE1.innerText = "0" + (textareaE1.value.length) 
    }
    if (textareaE1.value.length < 10){
        totalCharE1.innerText = "0" +"0"+ textareaE1.value.length 
    }
    if ((textareaE1.getAttribute("maxLength") - textareaE1.value.length) <= 99){
        remCharE1.innerText = "0" + (textareaE1.getAttribute("maxLength") - textareaE1.value.length)
    }
    if ((textareaE1.getAttribute("maxLength") - textareaE1.value.length) < 10){
        remCharE1.innerText = "0" +"0" + (textareaE1.getAttribute("maxLength") - textareaE1.value.length)
    }
}