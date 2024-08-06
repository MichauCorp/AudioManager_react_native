// SoundManager.tsx
import { Audio } from 'expo-av';

class SoundManager {
  private sounds: { [key: string]: Audio.Sound } = {};

  async loadSound(key: string, soundFile: any): Promise<void> {
    if (this.sounds[key]) {
      await this.unloadSound(key);
    }
    console.log(`Loading Sound: ${key}`);
    const { sound } = await Audio.Sound.createAsync(soundFile);
    this.sounds[key] = sound;
  }

  async playSound(key: string): Promise<void> {
    if (!this.sounds[key]) {
      console.log(`Sound not loaded: ${key}`);
      return;
    }
    console.log(`Playing Sound: ${key}`);
    await this.sounds[key].playAsync();
  }

  async pauseSound(key: string): Promise<void> {
    if (!this.sounds[key]) {
      console.log(`Sound not loaded: ${key}`);
      return;
    }
    console.log(`Pausing Sound: ${key}`);
    await this.sounds[key].pauseAsync();
  }

  async stopSound(key: string): Promise<void> {
    if (!this.sounds[key]) {
      console.log(`Sound not loaded: ${key}`);
      return;
    }
    console.log(`Stopping Sound: ${key}`);
    await this.sounds[key].stopAsync();
  }

  async unloadSound(key: string): Promise<void> {
    if (!this.sounds[key]) {
      console.log(`No sound to unload: ${key}`);
      return;
    }
    console.log(`Unloading Sound: ${key}`);
    await this.sounds[key].unloadAsync();
    delete this.sounds[key];
  }

  async unloadAllSounds(): Promise<void> {
    for (const key in this.sounds) {
      await this.unloadSound(key);
    }
  }
}

export default new SoundManager();