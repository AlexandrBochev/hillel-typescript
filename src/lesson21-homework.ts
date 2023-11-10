// Learn and implement Facade design pattern in typescript.

class WirelessHeadphones {
  turnOn() {
    console.log('Wireless headphones turned on')
  }

  turnOff() {
    console.log('Wireless headphones turned off')
  }

  connectTheDevice() {
    console.log('Wireless headphones connected to device')
  }

  disconnectTheDevice() {
    console.log('Wireless headphones disconnected from device')
  }
}

class Device {
  turnOn() {
    console.log('Device turned on')
  }

  turnOff() {
    console.log('Device turned off')
  }

  connectTheWirelessHeadphones() {
    console.log('Device connected to wireless headphones')
  }

  disconnectTheWirelessHeadphones() {
    console.log('Device disconnected from wireless headphones')
  }

  openTheMusicApp() {
    console.log('Device opened music app')
  }

  closeTheMusicApp() {
    console.log('Device closed music app')
  }
}

class MusicApp {
  playMusic() {
    console.log('Music app playing music')
  }

  stopMusic() {
    console.log('Music app stopped playing music')
  }
}

class ListenToMusicFacade {
  wirelessHeadphones: WirelessHeadphones
  device: Device
  musicApp: MusicApp

  constructor(wirelessHeadphones: WirelessHeadphones, device: Device, musicApp: MusicApp) {
    this.wirelessHeadphones = wirelessHeadphones
    this.device = device
    this.musicApp = musicApp
  }

  listenToMusic() {
    this.wirelessHeadphones.turnOn()
    this.device.turnOn()
    this.wirelessHeadphones.connectTheDevice()
    this.device.connectTheWirelessHeadphones()
    this.device.openTheMusicApp()
    this.musicApp.playMusic()
  }

  stopListeningToMusic() {
    this.musicApp.stopMusic()
    this.device.closeTheMusicApp()
    this.device.disconnectTheWirelessHeadphones()
    this.wirelessHeadphones.disconnectTheDevice()
    this.device.turnOff()
    this.wirelessHeadphones.turnOff()
  }
}

const wirelessHeadphones = new WirelessHeadphones()
const device = new Device()
const musicApp = new MusicApp()
const listenToMusicFacade = new ListenToMusicFacade(wirelessHeadphones, device, musicApp)

listenToMusicFacade.listenToMusic()
listenToMusicFacade.stopListeningToMusic()