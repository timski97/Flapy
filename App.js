import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
// import {} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import Video from 'react-native-video';
import entities from './entities';
import Physics from './src/components/physics';
import {Images} from './utils/Images';
import FastImage from 'react-native-fast-image';
import {Platform} from 'react-native';
import {WoodenModal} from './src/components/Modal';
import {WoodenModalStart} from './src/components/ModalStart';
import video from './assets/video/coffeeapp.mp4';
import Constants from './src/constants/Constants';

export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [stopGame, setStopGame] = useState(false);
  const [stop, setStop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // setStopGame(false);
    setRunning(false);
    setStop(false);
  }, []);
  const videoPlayer = React.useRef();

  const onReplay = () => {
    if (videoPlayer.current) {
      videoPlayer.current.seek(0);
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <Image
        source={Images.bg}
        style={{
          width: '100%',
          marginTop: -20,
          height: '105%',
        }}></Image> */}
      <Video
        ref={ref => {
          videoPlayer.current = ref;
        }}
        source={video}
        paused={!isPlaying}
        style={styles.backgroundVideo}
        repeat={true}
        // resizeMode={'cover'}
        // hideShutterView={true}
        // posterResizeMode={'none'}
        // rate={1.5}
      />

      <GameEngine
        ref={ref => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        stop={stop}
        isPlaying={isPlaying}
        running={running}
        stopGame={stopGame}
        onEvent={e => {
          switch (e.type) {
            case 'game_over':
              // setStopGame(false);
              setIsPlaying(false);
              setStop(false);
              setRunning(false);
              gameEngine.stop();
              break;
            case 'new_point':
              setCurrentPoints(currentPoints + 1);
              break;
          }
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}></GameEngine>

      <View style={styles.scoreView}>
        <View style={styles.row}>
          <Text style={styles.text}>{currentPoints}</Text>
          <Image source={Images.coins} style={{width: 38, height: 40}} />
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.red]}>{}</Text>
          <Image
            resizeMode="stretch"
            source={Images.hart}
            style={{width: 38, height: 38}}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setStop(true);
          setIsPlaying(false);
          gameEngine.stop();
          setStopGame(true);
        }}
        style={{position: 'absolute'}}>
        <Image
          style={styles.stopButton}
          source={Images.stopButton}
          resizeMode="stretch"
        />
      </TouchableOpacity>

      {!running && (
        <WoodenModal
          currentPoints={currentPoints}
          closeModal={() => {
            gameEngine.swap(entities());
          }}
          playModal={() => {
            setCurrentPoints(0);
            setRunning(true);
            setIsPlaying(true);
            gameEngine.swap(entities());
            onReplay();
          }}
        />
      )}

      {stopGame && (
        <WoodenModalStart
          playModalStart={() => {
            setStop(false);
            setIsPlaying(true);
            gameEngine.start();
            setStopGame(false);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    left: 25,
    fontWeight: '400',
    color: 'yellow',
  },
  scoreView: {
    position: 'absolute',
    top: 37,
    right: 22,
    height: 85,
    width: 105,
    justifyContent: 'space-between',
  },
  stopButton: {
    position: 'absolute',
    width: 70,
    height: 60,
    top: 37,
    left: 20,
  },
  backgroundVideo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  red: {color: '#E55A47'},
});
