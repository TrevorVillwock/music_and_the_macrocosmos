var player = new Tone.Player(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1506195/keyboard-key.mp3"
).toDestination();

Tone.Transport.bpm.value = 120;
  
Tone.Transport.scheduleRepeat((time) => {
    player.start(time).stop(time + 0.1);
}, "4n");
  
function start() {
    Tone.start();
    Tone.Transport.start();
}

function stop() {
    Tone.Transport.stop();
}
  