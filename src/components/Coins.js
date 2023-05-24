import Matter from 'matter-js';
import React from 'react';
import {Image, View} from 'react-native';
import {Images} from '../../utils/Images';

export const Coins = props => {
  const widthBody = Math.round(
    props.body.bounds.max.x - props.body.bounds.min.x,
  );
  const heightBody = Math.round(
    props.body.bounds.max.y - props.body.bounds.min.y,
  );
  const xBody = Math.round(props.body.position.x - widthBody / 2);
  const yBody = Math.round(props.body.position.y - heightBody / 2);
  // const yBody = 200;
  // console.log(widthBody);
  // console.log('Coinsy', yBody);
  // console.log('Coinsx', xBody);
  return (
    <Image
      style={{
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,

        // overflow: 'hidden',
        flexDirection: 'column',
        zIndex: 1000,
      }}
      resizeMode="stretch"
      source={Images.coins}
    />
  );
};

export default (world, label, pos, size) => {
  const initialCoins = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label,
      isStatic: true,
    },
  );
  Matter.World.add(world, initialCoins);

  return {
    body: initialCoins,
    pos,
    renderer: <Coins />,
  };
};
