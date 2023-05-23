import {Dimensions} from 'react-native';
import Constants from '../src/constants/Constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
console.log(windowHeight);

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // return Math.floor(Math.random() + min);
};
export const getPipeSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom(300, Constants.windowHeight - 100);
  // let yPosTop = -getRandom(5, Constants.windowHeight - 80);

  const pipeTop = {
    pos: {
      x: Constants.windowWidth + addToPosX,
      y: Constants.windowHeight * 2 + 220 + yPosTop,
    },
    size: {height: Constants.windowHeight * 2, width: 75},
  };
  const pipeBottom = {
    pos: {
      x: Constants.windowWidth + addToPosX,
      y: yPosTop,
    },
    size: {height: Constants.windowHeight * 2, width: 75},
  };
  const coinPos = {
    pos: {
      x: Constants.windowWidth + addToPosX,
      // y: (pipeBottom.pos.y - pipeTop.pos.y) / 2 + pipeTop.pos.y,
      y: Constants.windowHeight * 2 + 220 + yPosTop - Constants.windowHeight,
    },
    size: {height: 41, width: 41},
  };
  console.log('pipeBotom', pipeBottom);
  console.log('pipTop', pipeTop);
  console.log('coin', coinPos);

  return {pipeTop, pipeBottom, coinPos};
};
