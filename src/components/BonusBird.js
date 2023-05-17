import Matter from 'matter-js';
import React, {useEffect, useRef} from 'react';
import {Image, Animated} from 'react-native';
import {Images} from '../../utils/Images';

const BonusBird = props => {
  // const animatedValue = useRef(new Animated.Value(props.body.velocity.y));

  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;
  // const startAnimated = () => {
  //   animatedValue.setValue(props.body.velocity.y);
  // };

  // const rotation = startAnimated.interpolate({
  //   inputRange: [-10, 0, 10, 20],
  //   outputRange: ['-20deg', '0deg', '15deg', '45deg'],
  //   extrapolate: 'clamp',
  // });
  let image = Images['bonusBird' + props.pose];
  return (
    <Image
      style={{
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        // transform: [{rotate: rotation}],
      }}
      resizeMode="stretch"
      source={image}
    />
  );
};

export default (world, color, pos, size) => {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {label: 'BonusBird'},
  );
  Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    pos,
    renderer: <BonusBird />,
  };
};
