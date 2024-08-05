// SoundManager.tsx
import { Audio } from 'expo-av';

class SoundManager {
  private sound: Audio.Sound | null = null;

  async loadSound(soundFile: any): Promise<void> {
    if (this.sound) {
      await this.unloadSound();
    }
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(soundFile);
    this.sound = sound;
  }

  async playSound(): Promise<void> {
    if (!this.sound) {
      console.log('Sound not loaded');
      return;
    }
    console.log('Playing Sound');
    await this.sound.playAsync();
  }

  async pauseSound(): Promise<void> {
    if (!this.sound) {
      console.log('Sound not loaded');
      return;
    }
    console.log('Pausing Sound');
    await this.sound.pauseAsync();
  }

  async stopSound(): Promise<void> {
    if (!this.sound) {
      console.log('Sound not loaded');
      return;
    }
    console.log('Stopping Sound');
    await this.sound.stopAsync();
  }

  async unloadSound(): Promise<void> {
    if (!this.sound) {
      console.log('No sound to unload');
      return;
    }
    console.log('Unloading Sound');
    await this.sound.unloadAsync();
    this.sound = null;
  }
}

export default new SoundManager();