// Adapted from https://codepen.io/dirkk0/pen/yLMaMGa
// This code creates a metronome with a "random speed" feature
// that will make it either speed up or slow down by a random
// amount on each click.

// let player = new Tone.Player(
//     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1506195/keyboard-key.mp3"
// ).toDestination();

let volSlider;

window.onload = function () {
    volSlider = document.getElementById("volumeSlider");
    console.log(volSlider);
}

let vol = new Tone.Volume(-30).toDestination()

// Create new Player object and load sound file into it
let player = new Tone.Player(
    "wood_block.wav"
).connect(vol);



// Boolean variable indicating whether randomness is turned on or off
let random = 0;

// Set default value for BPM (beats per minute). 60 BPM is one beat per second.
Tone.Transport.bpm.value = 60;

Tone.Transport.scheduleRepeat((time) => {
    player.start(time).stop(time + 0.1);
}, "4n");

// Run when start button is clicked
function start() {
    Tone.start();
    Tone.Transport.start();
}

// Run when the stop button is clicked
function stop() {
    Tone.Transport.stop();
}

async function toggleRandom() {
    console.log("toggling random");
    if (random) {
        random = 0;
    } else {
        random = 1;
    }

    while (random) {
        Tone.Transport.bpm.value = 150 + Math.random() * 1000; 
        console.log("bpm: " + Tone.Transport.bpm.value);
        await new Promise(r => setTimeout(r, (1000*(60 / Tone.Transport.bpm.value))));
    }
}

function setVolume() {
    // The html slider gives us values 0-200, which we map
    // to be between -100 and 0 dB because that's what the
    // Tone.js Volume object expects.
    // For an explanation of how decibels work see here:
    // https://ehomerecordingstudio.com/decibels/
    console.log("volume: " + volSlider.value)
    let dB = -1 * (200 - volSlider.value)
    console.log("dB: " + dB)
    vol.volume.value = -1 * (200 - volSlider.value) 
}