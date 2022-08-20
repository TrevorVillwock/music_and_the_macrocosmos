class HelloSound {
    
    constructor() {

        // This will be resest to the next note in the melody array
        this.note = {
            pitch: 220, // in Hertz
            volume: 0.1, 
            duration: 1
        }

        this.instrument1 = new Pizzicato.Sound({ 
            source: 'wave', 
            options: {
                type: 'sawtooth',
                frequency: this.note.pitch, 
                volume: this.note.volume,
            }
        });

        this.playButton = document.getElementById("play class");
        this.stopButton = document.getElementById("stop class");
        this.playMelodyButton = document.getElementById("play melody");
        
        this.playButton.addEventListener('click', () => {
            console.log("play event listener");
            this.play();
        });
        this.stopButton.addEventListener('click', () => {
            console.log("stop event listener");
            this.stop();
        })
        this.playMelodyButton.addEventListener('click', () => {
            console.log("playing melody");
            this.playMelody;
        })
        
    }

    play() {
        console.log("playing") 
        this.instrument1.play();
    }

    stop() {
        console.log("stopping")
        this.instrument1.stop();
    }
    
    // melody will be a Melody object with arrays for pitches, volumes, and durations
    // for the given melody
    /**
 
 * @param {Melody} melody - The melody to play. Melody will be a Melody object 
 *   with pitches, volumes, and durations as integer arrays as well as tempo 
 *   (quarter note length in milliseconds) as an integer
 * 
 */
    playMelody(melody) {
        for (i = 0; i < melody.pitches.length; ++i) {
            this.note.pitch;
            this.note.volume = melody.volume[i];
            
            setTimeout(() => {
                this.play();
            }, this.note.duration)
        }
    }
}

let userPlayer = new Player();