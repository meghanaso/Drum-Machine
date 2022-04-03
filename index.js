const drumpads = document.querySelectorAll('.drum-pad')
const display = document.querySelector("#display")

const playSound = sound => {
  sound.play()
  let pad = sound.parentElement
  display.innerHTML = pad.id.replace(/-/g, ' ')
  pad.classList.add("active")
  setTimeout(() => {
    pad.classList.remove("active")
  }, 200)
}

drumpads.forEach(pad => {
  pad.addEventListener('click', (e) => {
    let sound = pad.children[0]
    playSound(sound)
  })
})
document.onkeydown = (e) => {
  let pressedKey = String.fromCharCode(e.keyCode).toUpperCase()
  let sound = document.querySelector(`#${pressedKey}`)
  if (sound) {
    playSound(sound)
  }
}
  
  
  
  