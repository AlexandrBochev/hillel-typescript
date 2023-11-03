// Investigate Abstract Factory gof design pattern. Create a demo example with it.

interface GuitarFactory {
  createGuitar(): Guitar
  createBass(): BassGuitar
  createAcousticGuitar(): AcousticGuitar
}

interface Guitar {
  play(): void
}

interface BassGuitar {
  play(): void
}

interface AcousticGuitar {
  play(): void
}

class ElectricGuitar implements Guitar {
  play(): void {
    console.log('Electric guitar is playing')
  }
}

class BassElectricGuitar implements BassGuitar {
  play(): void {
    console.log('Bass guitar is playing')
  }
}

class AcousticElectricGuitar implements AcousticGuitar {
  play(): void {
    console.log('Acoustic guitar is playing')
  }
}

class AllGuitarFactory implements GuitarFactory {
  createGuitar(): Guitar {
    return new ElectricGuitar()
  }

  createBass(): BassGuitar {
    return new BassElectricGuitar()
  }

  createAcousticGuitar(): AcousticGuitar {
    return new AcousticElectricGuitar()
  }
}

const factory = new AllGuitarFactory()

const guitar = factory.createGuitar()
const bass = factory.createBass()
const acoustic = factory.createAcousticGuitar()

guitar.play()
bass.play()
acoustic.play()