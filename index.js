window.addEventListener('keydown', function(e){
    // select the css element whose data-key equals to the input
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; // stop the funtion
    audio.currentTime = 0 // set the time to 0 so it can play over and over again
    audio.play() // it is the built-in method for the HTML audio element
    key.classList.add('playing')
})