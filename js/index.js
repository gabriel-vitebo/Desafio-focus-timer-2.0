import Timer from "./timer.js"


const timerDisplay = document.querySelector('.timer')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.second')
let minutes = Number(minutesDisplay.textContent)
let seconds
let timerTimeOut

let timer = Timer(
    minutesDisplay,
    secondsDisplay,
    timerDisplay,
    timerTimeOut,
    seconds,
    minutes,)


const buttonSoundForest = document.querySelector('.sound-forest')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCoffeeShop = document.querySelector('.sound-coffee_shop')
const buttonSoundFire = document.querySelector('.sound-fire')

const buttonControlPlay = document.querySelector('.controls-play')
const buttonControlStop = document.querySelector('.controls-stop')
const buttonControlAddMinutes = document.querySelector('.controls-add_minutes')
const buttonControlRemoveMinutes = document.querySelector('.controls-remove_minutes')

const buttonPressAudioForest = new Audio("./sounds/Floresta.wav")
const buttonPressAudioRain = new Audio("./sounds/Chuva.wav")
const buttonPressAudioCoffeShop = new Audio("./sounds/Cafeteria.wav")
const buttonPressAudioFire = new Audio("./sounds/Lareira.wav")

function buttonSoundPlayForest() {
    buttonPressAudioRain.pause()
    buttonPressAudioCoffeShop.pause()
    buttonPressAudioFire.pause()
    buttonPressAudioForest.play()
    buttonPressAudioForest.loop = true

}

function buttonSoundPlayRain() {
    buttonPressAudioForest.pause()
    buttonPressAudioCoffeShop.pause()
    buttonPressAudioFire.pause()
    buttonPressAudioRain.play()
    buttonPressAudioRain.loop = true
}

function buttonSoundPlayCoffeShop() {
    buttonPressAudioRain.pause()
    buttonPressAudioForest.pause()
    buttonPressAudioFire.pause()
    buttonPressAudioCoffeShop.play()
    buttonPressAudioCoffeShop.loop = true
}

function buttonSoundPlayFire() {
    buttonPressAudioRain.pause()
    buttonPressAudioCoffeShop.pause()
    buttonPressAudioForest.pause()
    buttonPressAudioFire.play()
    buttonPressAudioFire.loop = true
}

export function buttonSoundStop() {
    buttonPressAudioRain.pause()
    buttonPressAudioCoffeShop.pause()
    buttonPressAudioForest.pause()
    buttonPressAudioFire.pause()
}

buttonSoundForest.addEventListener('click', function(){
    buttonSoundForest.classList.add('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')


    buttonSoundPlayForest()
})

buttonSoundRain.addEventListener('click', function(){
    buttonSoundRain.classList.add('button-selected')
    buttonSoundForest.classList.remove('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')

    buttonSoundPlayRain()
})


buttonSoundCoffeeShop.addEventListener('click', function(){
    buttonSoundCoffeeShop.classList.add('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundForest.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')

    buttonSoundPlayCoffeShop()
})

buttonSoundFire.addEventListener('click', function(){
    buttonSoundFire.classList.add('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundForest.classList.remove('button-selected')

    buttonSoundPlayFire()
})



buttonControlPlay.addEventListener('click', function() {
    buttonControlPlay.classList.add('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')

    
    timer.countDown()
    timer.howManyMinutes()
    
})

buttonControlStop.addEventListener('click', function() {
    buttonControlStop.classList.add('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')

    timer.timerReset()
    buttonSoundStop()
})


buttonControlAddMinutes.addEventListener('click', function() {
    buttonControlAddMinutes.classList.add('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')
    timer.addMinutes(5)
})

buttonControlRemoveMinutes.addEventListener('click', function() {
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.add('controls-selected')

    timer.removeMinutes(5)
})

