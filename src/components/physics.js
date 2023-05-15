import Matter from 'matter-js';
import {getPipeSizePosPair} from '../../utils/random';

import Constants from '../constants/Constants';

let tick = 0;
let pose = 1;
const Physics = (entities, {touches, time, dispatch}) => {
  let engine = entities.physics.engine;
  // let world = entities.physics.world;
  let bird = entities.bird.body;
  let hadTouches = false;
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      if (!hadTouches) {
        // hadTouches = true;
        Matter.Body.setVelocity(bird, {
          x: bird.velocity.x,
          y: -7,
        });
      }
    });

  Matter.Engine.update(engine, time.delta);

  for (let index = 1; index <= 2; index++) {
    if (
      entities[`Coins${index}`].body.bounds.max.x <= 50 &&
      !entities[`Coins${index}`].point
    ) {
      entities[`Coins${index}`].point = true;
      dispatch({type: 'new_point'});
    }

    if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 0) {
      const pipeSizePos = getPipeSizePosPair(Constants.windowWidth * 0.9);

      Matter.Body.setPosition(
        entities[`ObstacleTop${index}`].body,
        pipeSizePos.pipeTop.pos,
      );
      Matter.Body.setPosition(
        entities[`ObstacleBottom${index}`].body,
        pipeSizePos.pipeBottom.pos,
      );
      // Matter.Body.setPosition(
      //   entities[`Coin${index}`].body,
      //   coinSizePos.coinPos.pos,
      // );

      entities[`ObstacleTop${index}`].point = false;
    }
    if (entities[`Coins${index}`].body.bounds.max.x <= 0) {
      const coinSizePos = getPipeSizePosPair(Constants.windowWidth * 0.9);
      Matter.Body.setPosition(
        entities[`Coins${index}`].body,
        coinSizePos.coinPos.pos,
      );

      entities[`Coins${index}`].point = false;
    }

    Matter.Body.translate(entities[`Coins${index}`].body, {x: -3, y: 0});
    Matter.Body.translate(entities[`ObstacleTop${index}`].body, {x: -3, y: 0});
    Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
      x: -3,
      y: 0,
    });
  }

  Matter.Events.on(engine, 'collisionStart', event => {
    dispatch({type: 'game_over'});
  });
  tick += 1;
  if (tick % 8 === 0) {
    pose = pose + 1;
    if (pose > 3) {
      pose = 1;
    }
    entities.bird.pose = pose;
  }
  return entities;
};
export default Physics;