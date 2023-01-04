const toDarkMode = document.querySelector(".button-dark-mode")
const toLightMode = document.querySelector(".button-light-mode")
const changeMode = document.querySelector('body')

export function DarkMode() {
  function clean() {
    changeMode.classList.remove('light-mode')
    changeMode.classList.remove('dark-mode')
    toDarkMode.classList.remove('hide')
    toLightMode.classList.remove('hide')
  }

  toDarkMode.addEventListener('click', () => {
    clean()
    changeMode.classList.add('dark-mode')
    toDarkMode.classList.add('hide')
  })

  toLightMode.addEventListener('click', () => {
    clean()
    changeMode.classList.add('light-mode')
    toLightMode.classList.add('hide')
  })
}