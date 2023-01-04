import { Timer } from "./timer.js";
const timer = Timer()

const playTimer = document.querySelector(".controls-play")
const pauseTimer = document.querySelector(".controls-pause")
const stopTimer = document.querySelector(".controls-stop")
const addFiveMinutes = document.querySelector(".controls-add_minutes")
const removeFiveMinutes = document.querySelector(".controls-remove_minutes")
const chooseHowManyMinutes = document.querySelector(".timer")


export function ControlsTimer() {
  playTimer.addEventListener('click', () => {
    timer.countDown()
    playTimer.classList.add('hide')
    pauseTimer.classList.remove('hide')
  })

  pauseTimer.addEventListener('click', () => {
    playTimer.classList.remove("hide")
    pauseTimer.classList.add("hide")
    timer.isPause = true
    timer.pause()
  })


  stopTimer.addEventListener('click', () => {
    playTimer.classList.remove("hide")
    pauseTimer.classList.add("hide")
    timer.timerReset()
  })

  addFiveMinutes.addEventListener('click', () => {
    timer.addFiveMinutes(5)
  })

  removeFiveMinutes.addEventListener('click', () => {
    timer.removeFiveMinutes(5)
  })

  chooseHowManyMinutes.addEventListener('click', () => {
    timer.howManyMinutes()
  })
}

