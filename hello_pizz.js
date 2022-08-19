
class HelloSound {
    
    constructor() {
        this.voice1 = {
            pitches: [80],
            velocities: [100],
            durations: [1]
        }
        this.instrument1 = new Pizzicato.Sound({ 
            source: 'wave', 
            options: {
                type: 'sawtooth',
                frequency: this.voice1.pitches[0]
            }
        });
        this.playButton = document.getElementById("play");
        this.stopButton = document.getElementById("stop");

        console.log(this.button)
        
        this.playButton.addEventListener('click', () => {
            console.log("play event listener")
            this.play();
        });

        this.stopButton.addEventListener('click', () => {
            console.log("stop event listener")
            this.stop()
        })
    }

    play() {
        console.log("playing") 

        this.instrument1.play();
    }

    stop() {
        this.instrument1.stop();
    }
}

let user_sound = new HelloSound();