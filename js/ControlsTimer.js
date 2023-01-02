import { Timer } from "./Timer.js"
const timer = new Timer()

export class ControlsTimer {
  
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
    this.minutesToRemoved =
    Number(timer.minutesDisplay.textContent) - timer.minutes
    timer.minutesDisplay.textContent = this.minutesToRemoved
  }
  
  addMinutes(minutes) {
    this.minutesToIncremented =
    Number(timer.minutesDisplay.textContent) + timer.minutes
    timer.minutesDisplay.textContent = this.minutesToIncremented
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

  addFiveMinutes = document.querySelector(".controls-add_minutes").addEventListener('click', () => {
    this.addMinutes(5)
  })
}