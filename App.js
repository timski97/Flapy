import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import entities from './entities';
import Physics from './src/components/physics';
import {Images} from './utils/Images';
import Constants from './src/constants/Constants';
import common from './utils/Common';
import FastImage from 'react-native-fast-image';
import {Platform} from 'react-native';
import {AnimatedBackground} from './src/components/AnimatedBackground';

export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  const backgroundX = useSharedValue(0);

  useEffect(() => {
    setRunning(false);
  }, []);
  return (
    <View style={{flex: 1}}>
      {/* <StatusBar translucent backgroundColor={'trasparent'} /> */}
      {/* <AnimatedBackground /> */}

      <FastImage
        source={{
          uri:
            Platform.OS === 'android'
              ? 'https://coffeeart-backend.nv-dev.com/bg-no-start-6.5x.png'
              : 'https://coffeeart-backend.nv-dev.com/bg-no-start-6x.jpeg',

          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}
        style={{
          position: 'absolute',
          height:
            Platform.OS === 'android' && Platform.Version >= 50
              ? Constants.windowHeight + common.scaleHeight(0)
              : Constants.windowHeight + 40,
          width: 6630,
          // width: Constants.windowWidth,
          height: Constants.windowHeight,
        }}
        // resizeMode="stretch"
        defaultSource={Images.bgNoStart}
      />
      <GameEngine
        ref={ref => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={e => {
          switch (e.type) {
            case 'game_over':
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
          <Text style={styles.text}></Text>
          <Image
            resizeMode="stretch"
            source={Images.hart}
            style={{width: 38, height: 38}}
          />
        </View>
      </View>

      {!running ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              setCurrentPoints(0);
              setRunning(true);
              gameEngine.swap(entities());
            }}>
            <Image
              source={Images.start}
              style={{width: 290, height: 150, resizeMode: 'stretch'}}
            />
          </TouchableOpacity>
        </View>
      ) : null}
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
});
