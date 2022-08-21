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
            endGame()
            // repeat()
            render()
        isWaiting = false
        }, 1000);
    }
}

function endGame() {
    if(dogQty >= 4) {
        document.body.innerHTML = `        
        <div id="container">
        <header>
            <div class="container">
                <img src="icon-profile.png" class="topicon">
                <a href="index.html"><img src="logo.png" class="topicon"></a>
                <img src="icon-chat.png" class="topicon">
            </div>
        </header>
        <div class="end">
        <h1>Sorry</h1>
        <h3>There are no more dogs in your area!</h3>
        <br />
        <h3>Wait, and try again later</h3>
        </div>
    </div>`
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
