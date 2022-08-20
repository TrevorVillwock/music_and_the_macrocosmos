class HelloSound {
    
    constructor() {
        this.voice1 = {
            pitches: [440],
            velocities: [100],
            durations: [1]
        }

        this.instrument1 = new Pizzicato.Sound({ 
            source: 'wave', 
            options: {
                type: 'sawtooth',
                frequency: 220, //this.voice1.pitches[0],
                volume: 0.01
            }
        });

        this.playButton = document.getElementById("play class");
        this.stopButton = document.getElementById("stop class");
        
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
        console.log("stopping")
        this.instrument1.stop();
    }
}

let user_sound = new HelloSound();