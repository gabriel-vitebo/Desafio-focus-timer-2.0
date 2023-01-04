import { Timer } from "./timer.js";
const timer = Timer()

const playTimer = document.querySelector(".controls-play")
const pauseTimer = document.querySelector(".controls-pause")
const stopTimer = document.querySelector(".controls-stop")

export function ControlsTimer() {

  playTimer.addEventListener('click', () => {
    timer.countDown()
    playTimer.classList.add('hide')
    pauseTimer.classList.remove('hide')
  })

  pauseTimer.addEventListener('click', () => {
    playTimer.classList.remove("hide")
    pauseTimer.classList.add("hide")
  })

  stopTimer.addEventListener('click', () => {
    playTimer.classList.remove("hide")
    pauseTimer.classList.add("hide")
    timer.timerReset()
  })




}

