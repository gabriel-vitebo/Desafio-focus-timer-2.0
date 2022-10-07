export default function Timer(
    minutesDisplay,
    secondsDisplay,
    timerDisplay,
    timerTimeOut,
    seconds,
    minutes,


) {
    timerDisplay
    seconds
    let isPaused = false
    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    
    }
    
    function countDown() {
       timerTimeOut = setTimeout(function() {
            seconds = Number(secondsDisplay.textContent)
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


    function pause() {
        clearTimeout(timerTimeOut)
        isPaused = true
    }

    function play() {

        if(isPaused) {
            countDown()
        } else {
            countDown()
            howManyMinutes()
        }
        isPaused = false
    }
    
    function howManyMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        
        if(!newMinutes) {
            timerReset()
            return
        }
    
        minutes = newMinutes
        updateTimerDisplay(minutes, 0)
    }

    return {
        updateTimerDisplay,
        countDown,
        timerReset,
        clearTimeout,
        howManyMinutes,
        pause,
        play
    }
}