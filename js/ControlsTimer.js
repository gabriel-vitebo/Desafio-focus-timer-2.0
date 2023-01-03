import { Timer } from "./Timer.js"
const timer = new Timer()

export class ControlsTimer extends Timer {
  newMinutes
  minutesToRemoved
  minutesToIncremented

  howManyMinutes() {
    this.newMinutes = prompt("Quantos Minutos você deseja?")

    if (!this.newMinutes) {
      timer.timerReset()
      return
    }

    timer.minutes = this.newMinutes
    timer.updateTimerDisplay(timer.minutes, 0)
  }

  removeMinutes(minutes) {
    this.minutesToRemoved = Number(timer.minutesDisplay.textContent) - minutes
    timer.minutesDisplay.textContent = this.minutesToRemoved
  }

  addMinutes(minutes) {
    this.minutesToIncremented =
      Number(timer.minutesDisplay.textContent) + minutes
    timer.minutesDisplay.textContent = this.minutesToIncremented
  }

  timerReset() {
    timer.updateTimerDisplay(timer.minutes, 0)
    clearTimeout(timer.timerTimeOut)
  }

  choiceMinutes = document
    .querySelector(".timer")
    .addEventListener("click", () => {
      this.howManyMinutes()
    })

  playTimer = document
    .querySelector(".controls-play")
    .addEventListener("click", () => {
      timer.countDown()
    })

  addFiveMinutes = document
    .querySelector(".controls-add_minutes")
    .addEventListener("click", () => {
      this.addMinutes(5)
    })

  removeFiveMinutes = document
    .querySelector(".controls-remove_minutes")
    .addEventListener("click", () => {
      this.removeMinutes(5)
    })

  stopTimer = document
  .querySelector(".controls-stop")
  .addEventListener('click', () => {
    this.timerReset()
  })
}