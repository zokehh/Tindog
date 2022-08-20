import dogs from "./data.js"
import Dog from './Dog.js'

let dogQty = 0
let currentDog = new Dog(dogs[dogQty])
const nopeBtn = document.getElementById("button-nope")
const yesBtn = document.getElementById("button-yes")
let isWaiting = false

function check() {
    if(!isWaiting) {
        getNewDog()
    }
}


yesBtn.addEventListener("click", function() {
    getNewDog()
    yes()
    currentDog.hasBeenSwiped = true
    currentDog.hasBeenLiked = false
})

nopeBtn.addEventListener("click", function() {
    getNewDog()
    nope()
    currentDog.hasBeenSwiped = true
    currentDog.hasBeenLiked = true
})

function getNewDog() {
    if (!isWaiting) {
        dogQty += 1
        isWaiting = true
        currentDog = new Dog(dogs[dogQty])
        setTimeout(() => {
            repeat()
            render()
        isWaiting = false
        }, 1000);
    }
    }

function repeat() {
        if(dogQty === 3){
            dogQty = -1
        }
}

const yes = () => document.getElementById("yes").style.display = "block"
const nope = () => document.getElementById("nope").style.display = "block"








function render() {
    document.getElementById("main").innerHTML = currentDog.getDogHtml()
}

render()
