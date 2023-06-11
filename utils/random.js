import {Dimensions} from 'react-native';
import Constants from '../src/constants/Constants';

// const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
// console.log(windowHeight);

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // return Math.floor(Math.random() + min);
};
export const getPipeSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom(220, Constants.windowHeight - 720);

  const pipeTop = {
    pos: {
      x: Math.round(Constants.windowWidth + addToPosX),
      y: Math.round(yPosTop),
    },
    size: {height: Constants.windowHeight, width: 75},
  };

  const pipeBottom = {
    pos: {
      x: Math.round(Constants.windowWidth + addToPosX),
      y: Math.round(Constants.windowHeight + 160 + yPosTop),
    },
    size: {height: Constants.windowHeight, width: 75},
  };

  return {pipeTop, pipeBottom};
};
