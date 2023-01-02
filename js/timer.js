export class Timer {
  secondsDisplay = document.querySelector(".second")
  minutesDisplay = document.querySelector(".minutes")
  timerTimeOut
  seconds
  minutes
  isFinished
  

  updateTimerDisplay(minutes, seconds) {
    this.minutesDisplay.textContent = String(minutes).padStart(2, "0")
    this.secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  timerReset() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(this.timerTimeOut)
  }

  countDown() {
    this.timerTimeOut = setTimeout(() => {
      this.seconds = Number(this.secondsDisplay.textContent)
      this.minutes = Number(this.minutesDisplay.textContent)
      this.isFinished = this.minutes <= 0 && seconds <= 0

      this.updateTimerDisplay(this.minutes, 0)

      if (this.isFinished) {
        timerReset()
        return
      }

      if (this.seconds <= 0) {
        this.seconds = 60
        --this.minutes
      }

      this.updateTimerDisplay(this.minutes, String(this.seconds - 1), this.minutes)

      this.countDown()
    }, 100)
  }
}
