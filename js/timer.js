const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".second")

export function Timer() {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  function addFiveMinutes(minutes) {
    const minutesToIncremented = Number(minutesDisplay.textContent) + minutes
    minutesDisplay.textContent = minutesToIncremented
  }

  function removeFiveMinutes(minutes) {
    const minutesToRemoved = Number(minutesDisplay.textContent) - minutes
    minutesDisplay.textContent = minutesToRemoved
  }

  function timerReset() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function howManyMinutes() {
    let newMinutes = prompt("Quantos minutos deseja?")

    if (!newMinutes) {
      timerReset()
      return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
  }


  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateTimerDisplay(minutes, 0)

      if (isFinished) {
        timerReset()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1), minutes)

      countDown()
    }, 1000)

  }
  return {
    updateTimerDisplay,
    howManyMinutes,
    countDown,
    timerReset,
    addFiveMinutes,
    removeFiveMinutes,
  }
}
