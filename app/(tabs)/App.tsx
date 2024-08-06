// App.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import SoundManager from '@/SoundManager';

export default function App() {
  useEffect(() => {
    // Load the sounds when the component mounts
    SoundManager.loadSound('sound1', require('@/assets/nightCall.mp3'));
    SoundManager.loadSound('sound2', require('@/assets/2.mp3'));

    // Unload all sounds when the component unmounts
    return () => {
      SoundManager.unloadAllSounds();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.soundGroup}>
        <Button title="Play Sound 1" onPress={() => SoundManager.playSound('sound1')} />
        <Button title="Pause Sound 1" onPress={() => SoundManager.pauseSound('sound1')} />
        <Button title="Stop Sound 1" onPress={() => SoundManager.stopSound('sound1')} />
      </View>
      <View style={styles.soundGroup}>
        <Button title="Play Sound 2" onPress={() => SoundManager.playSound('sound2')} />
        <Button title="Pause Sound 2" onPress={() => SoundManager.pauseSound('sound2')} />
        <Button title="Stop Sound 2" onPress={() => SoundManager.stopSound('sound2')} />
      </View>
      <Button title="Play Both Sounds" onPress={() => {
        SoundManager.playSound('sound1');
        SoundManager.playSound('sound2');
      }} />
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
  soundGroup: {
    marginBottom: 20,
  },
});