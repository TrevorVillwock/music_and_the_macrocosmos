class Melody {
    constructor(usrMelody) {
        this.melody = {
            frequencies: usrMelody.frequencies,
            volumes: usrMelody.volumes,
            durations: usrMelody.durations
        }
        this.tempo = 1000; // milliseconds per beat
    }

    // Notes will be an array of objects with arrays of
    // frequencies, volumes, and durations
    addNotes(notes) {
        melodyLength = this.melody.frequencies.length;
        for (i = melodyLength + 1; i < melodyLength; ++i) {
            for (j = 0; j < notes.frequencies.length; ++j) {
                this.melodies.frequencies[i] = notes.frequency[j]; 
                this.melodies.volumes[i] = notes.volume[j];
                this.melodies.volumes[i] = notes.duration[j];
            }
        }
    }
}
