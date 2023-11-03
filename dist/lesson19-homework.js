"use strict";
// Investigate Abstract Factory gof design pattern. Create a demo example with it.
class ElectricGuitar {
    play() {
        console.log('Electric guitar is playing');
    }
}
class BassElectricGuitar {
    play() {
        console.log('Bass guitar is playing');
    }
}
class AcousticElectricGuitar {
    play() {
        console.log('Acoustic guitar is playing');
    }
}
class AllGuitarFactory {
    createGuitar() {
        return new ElectricGuitar();
    }
    createBass() {
        return new BassElectricGuitar();
    }
    createAcousticGuitar() {
        return new AcousticElectricGuitar();
    }
}
const factory = new AllGuitarFactory();
const guitar = factory.createGuitar();
const bass = factory.createBass();
const acoustic = factory.createAcousticGuitar();
guitar.play();
bass.play();
acoustic.play();
