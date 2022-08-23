export class Melody {
    constructor(usrMelody) {
        this.notes = {
            frequencies: usrMelody.frequencies,
            volumes: usrMelody.volumes,
            durations: usrMelody.durations
        }
        this.tempo = 1000; // milliseconds per beat
    }

    // Notes will be an array of objects with arrays of
    // frequencies, volumes, and durations
    addNotes(notesToAdd) {
        melodyLength = this.notes.frequencies.length;
        for (i = melodyLength + 1; i < melodyLength; ++i) {
            for (j = 0; j < notesToAdd.frequencies.length; ++j) {
                this.melodies.frequencies[i] = notesToAdd.frequency[j]; 
                this.melodies.volumes[i] = notesToAdd.volume[j];
                this.melodies.volumes[i] = notesToAdd.duration[j];
            }
        }
    }
}
