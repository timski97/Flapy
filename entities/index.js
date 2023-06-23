import Matter from 'matter-js';
import Bird from '../src/components/Bird';
import Floor from '../src/components/Floor';
import Obstacle from '../src/components/Obstracle';
import Constants from '../src/constants/Constants';
import {Dimensions} from 'react-native';
import {getPipeSizePosPair} from '../utils/random';

const {height, width} = Dimensions.get('window');

export default restart => {
  let engine = Matter.Engine.create({enableSleeping: false});

  let world = engine.world;

  world.gravity.y = 0.5;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(Constants.windowWidth * 0.9);

  return {
    physics: {engine, world},

    bird: Bird(world, 'green', {x: 50, y: 300}, {height: 40, width: 60}),

    ObstacleTop1: Obstacle(
      world,
      'ObstacleTop1',
      'green',
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size,
    ),
    ObstacleBottom1: Obstacle(
      world,
      'ObstacleBottom1',
      'red',
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size,
    ),

    ObstacleTop2: Obstacle(
      world,
      'ObstacleTop2',
      'green',
      pipeSizePosB.pipeTop.pos,
      pipeSizePosB.pipeTop.size,
    ),
    ObstacleBottom2: Obstacle(
      world,
      'ObstacleBottom2',
      'red',
      pipeSizePosB.pipeBottom.pos,
      pipeSizePosB.pipeBottom.size,
    ),

    Floor: Floor(
      world,
      'red',
      {x: Constants.windowWidth / 2, y: Constants.windowHeight},
      {height: 10, width: Constants.windowWidth},
    ),
  };
};
