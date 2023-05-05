// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  // Changing the image and audio file based on selection from drop-down menu
  var image = document.querySelector("img")
  const selection = document.getElementById("horn-select")
  var audio = document.querySelector("audio")
  var sound_icon = document.querySelector("[src='assets/icons/volume-level-2.svg']")
  const jsConfetti = new JSConfetti()
  var party_bool = new Boolean(false)
 
  
  selection.addEventListener("input", (event) => {
    var value = selection.value
    if (value === "air-horn") {
      image.src = "assets/images/air-horn.svg"
      audio.src = "assets/audio/air-horn.mp3"
      party_bool = false
      console.log(audio)
    }
    else if (value === "car-horn") {
      image.src = "assets/images/car-horn.svg"
      audio.src = "assets/audio/car-horn.mp3"
      party_bool = false
      console.log(audio)
    }
    else if (value === "party-horn") {
      image.src = "assets/images/party-horn.svg"
      audio.src = "assets/audio/party-horn.mp3"
      party_bool = true
      //jsConfetti.addConfetti()
      console.log(audio)
    }
  })


  // changing image and volume on slider
  var slider = document.getElementById("volume")

  slider.addEventListener("input", (event) => {
    var value = slider.value
    if (value == 0) {
      sound_icon.src = "assets/icons/volume-level-0.svg"
      audio.volume = Number(value) * 0.01
    }
    else if (value >= 1 && value < 33) {
      sound_icon.src = "assets/icons/volume-level-1.svg"
      audio.volume = Number(value) * 0.01
    }
    else if (value >= 33 && value < 67) {
      sound_icon.src = "assets/icons/volume-level-2.svg"
      audio.volume = Number(value) * 0.01
    }
    else if (value >= 67 && value <= 100) {
      sound_icon.src = "assets/icons/volume-level-3.svg"
      audio.volume = Number(value) * 0.01
    }
  })



  // playing audio when button is pressed
  const button = document.querySelector("button")

  button.addEventListener("click", (event) => {
    if (party_bool) {
      jsConfetti.addConfetti()
    }
    audio.play()
  })

}