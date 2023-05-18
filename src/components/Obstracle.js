import Matter from 'matter-js';
import React from 'react';
import {Image, View} from 'react-native';
import {Images} from '../../utils/Images';

export const Obstacle = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const pipeRatio = 219 / widthBody;
  const pipeHeight = 156 * pipeRatio;
  const pipeRatioIos = 169 / widthBody;
  const pipeHeightIos = 280 * pipeRatioIos;
  const pipeIterations = Math.ceil(heightBody / pipeHeight);
  const pipeIterationsIos = Math.ceil(heightBody / pipeHeight);

  return (
    <View
      style={{
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        overflow: 'hidden',
        // flexDirection: 'column',
      }}>
      {Array.apply(
        null,
        Array(Platform.OS === 'ios' ? pipeIterationsIos : pipeIterations),
      ).map((el, idx) => {
        return (
          <Image
            style={{
              width: widthBody,
              height: Platform.OS === 'ios' ? pipeHeightIos : pipeHeight,
            }}
            key={idx}
            resizeMode="stretch"
            source={Images.column}
          />
        );
      })}
    </View>
  );
};

export default (world, label, color, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label,
      isStatic: true,
    },
  );
  Matter.World.add(world, initialObstacle);

  return {
    body: initialObstacle,
    pos,
    renderer: <Obstacle />,
  };
};
