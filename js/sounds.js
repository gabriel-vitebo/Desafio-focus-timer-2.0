export function Sounds() {

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
    
    function buttonSoundStop() {
        console.log(buttonPressAudioRain.pause, buttonPressAudioCoffeShop.pause, buttonPressAudioForest.pause, buttonPressAudioFire.pause)
        buttonPressAudioRain.pause()
        buttonPressAudioCoffeShop.pause()
        buttonPressAudioForest.pause()
        buttonPressAudioFire.pause()

    }

    return {
        buttonSoundPlayForest,
        buttonSoundPlayRain,
        buttonSoundPlayCoffeShop,
        buttonSoundPlayFire,
        buttonSoundStop
    }
}
