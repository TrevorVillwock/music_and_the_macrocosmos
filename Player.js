import {Melody} from './Melody.js'
class Player {
    
    constructor() {

        // This will be reset to the next note in the melody array
        this.note = {
            frequency: 220, // in Hertz
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
            var usrMelody = new Melody({
                frequencies: [220, 440, 330], // in Hertz
                volumes: [0.1, 0.1, 0.1], 
                durations: [1, 1, 1]
            })
            this.playMelody(usrMelody);
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
    

/**
 * @param {Melody} melody - The melody to play. Melody will be a Melody object 
 *   with pitches, volumes, and durations as integer arrays as well as tempo 
 *   (quarter note length in milliseconds) as an integer
 * 
 */
    async playMelody(melody) {
        var i = 0;
        console.log(melody.frequencies);

        for (i = 0; i < melody.notes.frequencies.length; ++i) {
            this.note.frequency = melody.notes.frequencies[i];
            this.note.volume = melody.notes.volumes[i];
            
            this.play();
            console.log("played a note");
            await new Promise(r => setTimeout(r, melody.notes.durations[i]*1000)); // convert seconds to milliseconds
            this.stop()
        }  
    }
}

let userPlayer = new Player();