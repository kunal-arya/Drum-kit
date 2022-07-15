// To get the keyboard key play the audio
function keyPlaying(event){
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.key[data-key="${event.code}"]`)
    if(!audio) return; // if key press is not in the List, it will stop the function
    audio.currentTime = 0; // rewind to the start;
    audio.play();
    key.classList.add("playing");
}

// To make key stop Playing
function stopPlaying(event){
    if(event.propertyName != "transform") return; 
    this.classList.remove("playing");
}

// To get the click event and play the audio after element get clicked
function playingClick (keyName){
    const key = document.querySelectorAll(`[data-key='Key${keyName}']`)[0];
    const audio = document.querySelectorAll(`[data-key='Key${keyName}']`)[1];
    key.addEventListener("click" , () => {
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing")
    })
};

// To select different keys that are going to play different audios
function ClickKeys(){
    const keys = ["A","S","D","F","G","H","J","K","L"];
    keys.forEach(key => playingClick(key));
}

// to remove the effect after element is clicked
const keys = document.querySelectorAll(".key");
keys.forEach( key => key.addEventListener("transitionend", stopPlaying));

// to trigger the event
window.addEventListener("keydown", keyPlaying); // For keyboard 
ClickKeys(); // for click