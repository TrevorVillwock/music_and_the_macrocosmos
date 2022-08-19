function play() {
    console.log("playing")
    var sineWave = new Pizzicato.Sound({ 
        source: 'wave', 
        options: {
            frequency: 440
        }
    });

    sineWave.play();
}

var button = document.getElementById("test");

button.addEventListener('click', () => {play()});

//<script type="module" src="./hello_pizz.js"></script>