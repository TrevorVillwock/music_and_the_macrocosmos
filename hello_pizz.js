function play(freq) {
    console.log("playing")
    var sawWave = new Pizzicato.Sound({ 
        source: 'wave', 
        options: {
            type: 'sawtooth',
            frequency: freq
        }
    });

    sawWave.attack = 0.5;
    sawWave.release = 1;

    sawWave.play();
}

var button = document.getElementById("test");

button.addEventListener('click', () => {
    play(220);
});