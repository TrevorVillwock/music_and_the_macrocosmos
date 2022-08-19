
class HelloSound {
    
    constructor() {
        this.voice1 = {
            pitches: [60],
            velocities: [100],
            durations: [1]
        }
        this.instrument = new Pizzicato.Sound({ 
            source: 'wave', 
            options: {
                type: 'sawtooth',
                frequency: freq
            }
        });
        this.button = document.getElementById("test");

        console.log(this.button)
        
        this.button.addEventListener('click', () => {
            console.log("event listener")
            play(220);
            this.instrument.stop()
        });
    }

    play(freq) {
        console.log("playing") 

        this.instrument.attack = 0.5;
        this.instrument.release = 1;

        this.instrument.play(freq);
    }

    stop() {
        this.instrument.stop();
    }
}