const forestAudio = new Audio('./sounds/Floresta.wav')
const rainAudio = new Audio('./sounds/Chuva.wav')
const coffeeAudio = new Audio('./sounds/Cafeteria.wav')
const firePlaceAudio = new Audio('./sounds/Lareira.wav')


const playForestAudio = document.querySelector(".sound-forest")
const playRainAudio = document.querySelector(".sound-rain")
const playCoffeeAudio = document.querySelector(".sound-coffee")
const playFirePlaceAudio = document.querySelector(".sound-fire")

export function ControlsAudio() {

  function removeAllSelected() {
    playForestAudio.classList.remove('button-selected')
    playRainAudio.classList.remove('button-selected')
    playCoffeeAudio.classList.remove('button-selected')
    playFirePlaceAudio.classList.remove('button-selected')
  }

  function pauseMusic() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()
    firePlaceAudio.pause()
  }

  removeAllSelected()

  playForestAudio.addEventListener('click', () => {
    pauseMusic()
    removeAllSelected()
    playForestAudio.classList.add("button-selected")
    forestAudio.play()
    forestAudio.loop = true
  })

  playRainAudio.addEventListener('click', () => {
    pauseMusic()
    removeAllSelected()
    playRainAudio.classList.add("button-selected")
    rainAudio.play()
    rainAudio.loop = true
  })

  playCoffeeAudio.addEventListener('click', () => {
    pauseMusic()
    removeAllSelected()
    playCoffeeAudio.classList.add("button-selected")
    coffeeAudio.play()
    coffeeAudio.loop = true
  })
  playFirePlaceAudio.addEventListener('click', () => {
    pauseMusic()
    removeAllSelected()
    playFirePlaceAudio.classList.add("button-selected")
    firePlaceAudio.play()
    firePlaceAudio.loop = true
  })

  return {
    pauseMusic,
    removeAllSelected
  }
}
