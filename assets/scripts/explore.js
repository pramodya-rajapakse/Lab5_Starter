// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  
  var voiceList = document.getElementById("voice-select")
  const synth = window.speechSynthesis;
  var text = document.getElementById("text-to-speak")
  const button = document.querySelector("button")
  
  
  
  // Add avaiable voices to drop-down menu
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }

    const voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " - DEFAULT"
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceList.appendChild(option)
    }

  }

  populateVoiceList();
  if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== "undefined") {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // speak text in voice from drop-down selection
  button.addEventListener("click", (event) => {
    const voices = speechSynthesis.getVoices();
    const utterThis = new SpeechSynthesisUtterance(text.value)

    const selectedOption = voiceList.selectedOptions[0].getAttribute("data-name")
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        console.log(selectedOption)
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
  })

}