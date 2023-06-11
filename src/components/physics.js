import Matter from 'matter-js';
import {getPipeSizePosPair} from '../../utils/random';
import {Platform} from 'react-native';
import Constants from '../constants/Constants';

let tick = 0;
let pose = 1;
const Physics = (entities, {touches, time, dispatch}) => {
  let engine = entities.physics.engine;
  let bird = entities.bird.body;
  let hadTouches = false;

  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      if (!hadTouches) {
        Matter.Body.setVelocity(bird, {
          x: 0,
          y: -4,
        });
      }
    });

  Matter.Engine.update(engine, time.delta);

  for (let index = 1; index <= 2; index++) {
    if (
      entities[`ObstacleTop${index}`].body.position.x <= 130 &&
      !entities[`ObstacleTop${index}`].point
    ) {
      entities[`ObstacleTop${index}`].point = true;
      pose = 4;
      entities.bird.pose = pose;

      dispatch({type: 'new_point'});
    }

    if (
      Platform.OS === 'ios'
        ? entities[`ObstacleTop${index}`].body.position.x <= -50
        : entities[`ObstacleTop${index}`].body.position.x <= -55
    ) {
      const pipeSizePos = getPipeSizePosPair(Constants.windowWidth * 0.5);

      Matter.Body.setPosition(
        entities[`ObstacleTop${index}`].body,
        pipeSizePos.pipeTop.pos,
      );
      Matter.Body.setPosition(
        entities[`ObstacleBottom${index}`].body,
        pipeSizePos.pipeBottom.pos,
      );

      entities[`ObstacleTop${index}`].point = false;
      entities[`ObstacleBottom${index}`].point = false;
    }

    Matter.Body.translate(entities[`ObstacleTop${index}`].body, {x: -2, y: 0});
    Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
      x: -2,
      y: 0,
    });
  }

  Matter.Events.on(engine, 'collisionStart', event => {
    pose = 7;

    // console.log(event);
    entities.bird.pose = pose;
    dispatch({type: 'game_over'});
  });
  tick += 1;
  if (tick % 10 === 0) {
    pose = pose + 1;
    // pose = 2;
    if (pose > 3) {
      pose = 1;
    }

    entities.bird.pose = pose;
  }
  return entities;
};
export default Physics;
