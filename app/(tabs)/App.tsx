// App.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import SoundManager from '@/SoundManager';

export default function App() {
  useEffect(() => {
    // Load the sound when the component mounts
    SoundManager.loadSound(require('@/assets/nightCall.mp3'));

    // Unload the sound when the component unmounts
    return () => {
      SoundManager.unloadSound();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={() => SoundManager.playSound()} />
      <Button title="Pause Sound" onPress={() => SoundManager.pauseSound()} />
      <Button title="Stop Sound" onPress={() => SoundManager.stopSound()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});