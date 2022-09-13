// Adapted from https://codepen.io/dirkk0/pen/yLMaMGa
// This code creates a metronome with a "random speed" button
// that will make it either speed up or slow down by a random
// amount on each click

// let player = new Tone.Player(
//     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1506195/keyboard-key.mp3"
// ).toDestination();

let player = new Tone.Player(
    "wood_block.wav"
).toDestination();

// boolean variable indicating whether randomness is turned on or off
let random = 0;

Tone.Transport.bpm.value = 100;

Tone.Transport.scheduleRepeat((time) => {
    player.start(time).stop(time + 0.1);
}, "4n");
  
function start() {
    Tone.start();
    Tone.Transport.start();
}

function stop() {
    Tone.Transport.stop();
    random = 0;
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