
class HelloSound {
    
    constructor(freq) {
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
            this.play(220)
            this.instrument.stop()
        });
    }

    play(freq) {
        console.log("playing") 
        
        var test_instrument = new Pizzicato.Sound({ 
            source: 'wave', 
            options: {
                type: 'sawtooth',
                frequency: freq
            }
        });

        test_instrument.play(freq);
        /*
        this.instrument.attack = 0.5;
        this.instrument.release = 1;

        this.instrument.play(freq);
        */
    }

    stop() {
        this.instrument.stop();
    }
}

let user_sound = new HelloSound(220);

let outside_instrument = new Pizzicato.Sound({ 
    source: 'wave', 
    options: {
        type: 'sawtooth',
        frequency: 300
    }
});

outside_instrument.play(220);
