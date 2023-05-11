const mainBox = document.querySelector(".main-box")
const thanksBox = document.querySelector(".thankYou-box")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rates = document.querySelectorAll(".btn")
const rating = document.getElementById("rating")
submitButton.addEventListener("click", () => {
    thanksBox.classList.remove("hidden")
    mainBox.style.display = "none"
});
rateAgain.addEventListener("click", () => {
    thanksBox.classList.add("hidden")
    mainBox.style.display ="block"
})
rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
});
