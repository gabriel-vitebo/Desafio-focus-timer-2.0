const timerDisplay = document.querySelector('.timer')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.second')
let minutes = Number(minutesDisplay.textContent)
let seconds
let timerTimeOut



const buttonSoundForest = document.querySelector('.sound-forest')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCoffeeShop = document.querySelector('.sound-coffee_shop')
const buttonSoundFire = document.querySelector('.sound-fire')

const buttonControlPlay = document.querySelector('.controls-play')
const buttonControlPause = document.querySelector('.controls-pause')
const buttonControlStop = document.querySelector('.controls-stop')
const buttonControlAddMinutes = document.querySelector('.controls-add_minutes')
const buttonControlRemoveMinutes = document.querySelector('.controls-remove_minutes')

buttonSoundForest.addEventListener('click', function(){
    buttonSoundForest.classList.add('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')

})

buttonSoundRain.addEventListener('click', function(){
    buttonSoundRain.classList.add('button-selected')
    buttonSoundForest.classList.remove('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')
})


buttonSoundCoffeeShop.addEventListener('click', function(){
    buttonSoundCoffeeShop.classList.add('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundForest.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')
})

buttonSoundFire.addEventListener('click', function(){
    buttonSoundFire.classList.add('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundForest.classList.remove('button-selected')
})

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")

}

function countDown() {
   timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateTimerDisplay(minutes, 0)
        
        if(isFinished) {
            timerReset()
            return
        }

        
        if(seconds <= 0) {
            seconds = 60
            --minutes
        }

        updateTimerDisplay(minutes,String(seconds - 1), minutes)


        countDown()
    }, 1000)  
}

function timerReset() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)

}

buttonControlPlay.addEventListener('click', function() {
    buttonControlPlay.classList.add('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')

    
    countDown()
    howManyMinutes()
    
})

buttonControlStop.addEventListener('click', function() {
    buttonControlStop.classList.add('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')

    timerReset()

})

buttonControlAddMinutes.addEventListener('click', function() {
    buttonControlAddMinutes.classList.add('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')
})

buttonControlRemoveMinutes.addEventListener('click', function() {
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.add('controls-selected')
})

function howManyMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    
    if(!newMinutes) {
        timerReset()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
}