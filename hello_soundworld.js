var sawWave = new Pizzicato.Sound({ 
    source: 'wave', 
    options: {
        type: 'sawtooth',
        frequency: 220,
        volume: 0.01
    }
});

var playButton = document.getElementById("play function");
var stopButton = document.getElementById("stop function");

playButton.addEventListener('click', () => {
    sawWave.play();
});

stopButton.addEventListener('click', () => {
    sawWave.stop();
})