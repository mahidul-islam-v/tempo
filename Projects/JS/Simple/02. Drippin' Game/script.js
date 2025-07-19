const redButton = document.getElementsByClassName("red")[0]
const greenButton = document.getElementsByClassName("green")[0]
const blueButton = document.getElementsByClassName("blue")[0]
const randomButton = document.getElementsByClassName("random")[0]
const h1 = document.getElementsByTagName("h1")[0]
const body = document.getElementsByTagName("body")[0]

var randomClicked = false

function setBgColor(color) {
    body.style.backgroundColor = color
}

function randomColorGenerator() {
    if (!randomClicked) {
    h1.classList.add("h1Drip")
    randomButton.classList.add("randomDrip")

randomButton.addEventListener("mousedown", () => {
    h1.classList.add("h1DripMore")
    h1.classList.remove("h1DripBack")
})

randomButton.addEventListener("mouseup", () => {
    h1.classList.add("h1DripBack")
    h1.classList.remove("h1DripMore")

randomButton.addEventListener("mouseleave", () => {
    h1.classList.add("h1DripBack")
    h1.classList.remove("h1DripMore")
})
})

    randomClicked = true
    }

    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

