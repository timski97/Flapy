import Matter from 'matter-js';
import Bird from '../src/components/Bird';
import Floor from '../src/components/Floor';
import Obstacle from '../src/components/Obstracle';
import Constants from '../src/constants/Constants';
import Coins from '../src/components/Coins';
import BonusBird from '../src/components/BonusBird';
import {Dimensions} from 'react-native';
import {getPipeSizePosPair} from '../utils/random';
import {generatePipes} from '../utils/random';

// const windowHeight = Dimensions.get('window').height;
// const windowWidth = Dimensions.get('window').width;
const {height, width} = Dimensions.get('window');
// const heightRatio = height / 667;
// const widthRatio = width / 375;

export default restart => {
  let engine = Matter.Engine.create({enableSleeping: false});

  let world = engine.world;

  world.gravity.y = 0.7;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(Constants.windowWidth * 0.9);
  const coinPosA = getPipeSizePosPair();
  const coinPosB = getPipeSizePosPair(Constants.windowWidth * 0.9);
  return {
    physics: {engine, world},

    bird: Bird(
      world,
      'green',
      {x: width / 8, y: height / 2},
      {height: 41, width: 60},
    ),
    // bonusBird: BonusBird(
    //   world,
    //   'green',
    //   {x: width / 8, y: height / 2},
    //   {height: 41, width: 60},
    // ),
    Coins1: Coins(
      world,
      'Coins1',
      // 'red',
      coinPosA.coinPos.pos,
      coinPosA.coinPos.size,
    ),
    Coins2: Coins(
      world,
      'Coins2',
      // 'red',
      coinPosB.coinPos.pos,
      coinPosB.coinPos.size,
    ),

    ObstacleTop1: Obstacle(
      world,
      'ObstacleTop1',
      'red',
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size,
    ),
    ObstacleBottom1: Obstacle(
      world,
      'ObstacleBottom1',
      'white',
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size,
    ),

    ObstacleTop2: Obstacle(
      world,
      'ObstacleTop2',
      'red',
      pipeSizePosB.pipeTop.pos,
      pipeSizePosB.pipeTop.size,
    ),
    ObstacleBottom2: Obstacle(
      world,
      'ObstacleBottom2',
      'blue',
      pipeSizePosB.pipeBottom.pos,
      pipeSizePosB.pipeBottom.size,
    ),

    Floor: Floor(
      world,
      'green',
      {x: Constants.windowWidth / 2, y: Constants.windowHeight},
      {height: 50, width: Constants.windowWidth},
    ),
  };
};
