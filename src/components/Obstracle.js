import Matter from 'matter-js';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Images} from '../../utils/Images';
import Constants from '../constants/Constants';

export const Obstacle = props => {
  const widthBody = Math.round(
    props.body.bounds.max.x - props.body.bounds.min.x,
  );
  const heightBody = Math.round(
    props.body.bounds.max.y - props.body.bounds.min.y,
  );
  const xBody = Math.round(props.body.position.x - widthBody / 2);
  const yBody = Math.round(props.body.position.y - heightBody / 2);
  const color = props.color;

  // console.log('Obstacle', props.body.position.x);
  // console.log('CoinsxO', xBody);

  return (
    <View>
      <Image
        style={{
          position: 'absolute',
          left: xBody,
          top: yBody,
          width: widthBody,
          height: heightBody + 30,
          resizeMode: 'stretch',
        }}
        source={color === 'green' ? Images.column1 : Images.column}
      />
      {props.body.position.x >= 120 && (
        <Image
          style={{
            position: 'absolute',
            left: xBody + 13,
            top: yBody - 90,
            width: 40,
            height: 40,
          }}
          resizeMode="stretch"
          source={Images.coins}
        />
      )}
    </View>
  );
};

export default (world, label, color, pos, size, isTop = false) => {
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
    isTop,
    color,
    renderer: <Obstacle />,
  };
};
// export const styles = ({xBody, yBody, widthBody, heightBody, color}) =>
//   StyleSheet.create({
//     obstacle: {
//       position: 'absolute',
//       left: xBody,
//       top: yBody,
//       width: widthBody,
//       height: heightBody + 20,
//       resizeMode: 'stretch',
//     },
//   });
