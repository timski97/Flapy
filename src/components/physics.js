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
          y: -7,
        });
      }
    });

  Matter.Engine.update(engine, time.delta);

  for (let index = 1; index <= 2; index++) {
    if (
      Platform.OS === 'ios'
        ? entities[`Coins${index}`].body.position.x <= 100
        : entities[`Coins${index}`].body.position.x <= 110
    ) {
      // entities[`Coins${index}`].point = true;
      dispatch({type: 'new_point'});
      const coinSizePos = getPipeSizePosPair(Constants.windowWidth * 0.9);
      Matter.Body.setPosition(
        entities[`Coins${index}`].body,
        coinSizePos.coinPos.pos,
      );

      entities[`Coins${index}`].point = false;
      pose = 4;
      entities.bird.pose = pose;
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
    // if (
    //   Platform.OS === 'ios'
    //     ? entities[`Coins${index}`].body.position.x <= 110
    //     : entities[`Coins${index}`].body.position.x <= 110
    // ) {
    //   const coinSizePos = getPipeSizePosPair(Constants.windowWidth * 0.9);
    //   Matter.Body.setPosition(
    //     entities[`Coins${index}`].body,
    //     coinSizePos.coinPos.pos,
    //   );

    //   // entities[`Coins${index}`].point = true;
    //   pose = 4;
    //   entities.bird.pose = pose;
    // }

    Platform.OS === 'ios'
      ? Matter.Body.translate(entities[`Coins${index}`].body, {x: -3, y: 0})
      : Matter.Body.translate(entities[`Coins${index}`].body, {x: -3, y: 0});
    Platform.OS === 'ios'
      ? Matter.Body.translate(entities[`ObstacleTop${index}`].body, {
          x: -3,
          y: 0,
        })
      : Matter.Body.translate(entities[`ObstacleTop${index}`].body, {
          x: -6,
          y: 0,
        });
    Platform.OS === 'ios'
      ? Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
          x: -3,
          y: 0,
        })
      : Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
          x: -3,
          y: 0,
        });

    // Matter.Body.translate(entities[`Coins${index}`].body, {x: -3, y: 0});
    // Matter.Body.translate(entities[`ObstacleTop${index}`].body, {x: -3, y: 0});
    // Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
    //   x: -3,
    //   y: 0,
    // });
  }

  Matter.Events.on(engine, 'collisionStart', event => {
    // if ((pose = 1)) {
    //   pose = 5;
    // }
    // if ((pose = 2)) {
    //   pose = 6;
    // }
    if ((pose = 3)) {
      pose = 7;
    }
    console.log(event);
    entities.bird.pose = pose;
    dispatch({type: 'game_over'});
  });

  tick += 1;
  if (Platform.OS === 'ios' ? tick % 16 === 0 : tick % 8 === 0) {
    pose = pose + 1;
    if (pose > 3) {
      pose = 1;
    }
    entities.bird.pose = pose;
  }
  // for (let index = 1; index <= 2; index++) {
  //   if (
  //     Platform.OS === 'ios'
  //       ? entities[`Coins${index}`].body.position.x <= 100
  //       : entities[`Coins${index}`].body.position.x <= 110
  //   ) {
  //     pose = 4;
  //     entities.bird.pose = pose;
  //   }
  // }
  return entities;
};
export default Physics;
