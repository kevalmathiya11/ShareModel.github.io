const model = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

function openModal(){
    console.log("model is  open")
    model.classList.add("active")
    overlay.classList.add("overlayactive")
}
function closeModal(){
    console.log("model is close")
    model.classList.remove('active')
    overlay.classList.remove('overlayactive')
}
