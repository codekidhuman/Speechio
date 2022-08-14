var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is now listening. Please speak."
    recognition.start();   
    document.getElementById("micimage").src = "voice-message-microphone-button.png"

}
recognition.onresult = function(event)
{
    console.log(event)
    var content = event.results[0][0].transcript;
    console.log(content)
    document.getElementById("status").innerHTML = "The system has finished listening.";
    document.getElementById("result").innerHTML = content;
    document.getElementById("micimage").src = "turn-microphone-off-button.png"
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("input").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
    document.getElementById("status").innerHTML = "The System has spoken."
}




