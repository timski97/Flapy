import {Dimensions} from 'react-native';
import Constants from '../src/constants/Constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
console.log(windowHeight);

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getPipeSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom(300, Constants.windowHeight - 100);

  const pipeTop = {
    pos: {x: Constants.windowWidth + addToPosX, y: yPosTop},
    size: {height: Constants.windowHeight * 2, width: 75},
  };
  const pipeBottom = {
    pos: {
      x: Constants.windowWidth + addToPosX,
      y: Constants.windowHeight * 2 + 200 + yPosTop,
      // y: Constants.windowHeight - yPosTop,
    },
    size: {height: Constants.windowHeight * 2, width: 75},
  };
  const coinPos = {
    pos: {
      x: Constants.windowWidth + addToPosX,
      y: pipeBottom.pos.y - Constants.windowHeight / 2 - 100,
      // y: (pipeBottom.pos.y + pipeTop.pos.y) / 2,
      // y: (pipeBottom.pos.y + pipeTop.pos.y) / 2 + Constants.windowWidth,
    },
    size: {height: 41, width: 41},
  };
  // console.log(coinPos.pos.y);
  console.log('pipeBotom', pipeBottom.pos.y);
  console.log('pipTop', pipeTop.pos.y);
  console.log('coin', coinPos.pos.y);

  return {pipeTop, pipeBottom, coinPos};
};
