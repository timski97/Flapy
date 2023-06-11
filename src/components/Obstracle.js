import Matter from 'matter-js';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Images} from '../../utils/Images';

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
  const pipeRatio = 389 / widthBody;
  const pipeHeight = 120 * pipeRatio;
  const pipeRatioAndroid = 409 / widthBody;
  const pipeHeightAndroid = 120 * pipeRatioAndroid;
  const pipeIterations = Math.ceil(heightBody / pipeHeight);
  const pipeIterationsAndroid = Math.ceil(heightBody / pipeHeightAndroid);

  // console.log('Obstacle', yBody);
  // console.log('CoinsxO', xBody);

  // return (
  //   <View>
  //     <View
  //       style={{
  //         position: 'absolute',
  //         left: xBody,
  //         top: yBody,
  //         width: widthBody,
  //         height: heightBody + 20,
  //         overflow: 'hidden',
  //         flexDirection: 'column',
  //       }}>
  //       {Array.apply(
  //         null,
  //         Array(Platform.OS === 'ios' ? pipeIterations : pipeIterationsAndroid),
  //       ).map((el, idx) => {
  //         return (
  //           <Image
  //             style={{
  //               width: widthBody,
  //               height: Platform.OS === 'ios' ? pipeHeight : pipeHeightAndroid,
  //             }}
  //             key={idx}
  //             resizeMode="stretch"
  //             source={Images.column}
  //           />
  //         );
  //       })}
  //     </View>
  //     {props.body.position.x >= 120 && (
  //       <Image
  //         style={{
  //           position: 'absolute',
  //           left: xBody + 15,
  //           top: yBody - 100,
  //           width: 40,
  //           height: 40,
  //           zIndex: 10000,
  //         }}
  //         resizeMode="stretch"
  //         source={Images.coins}
  //       />
  //     )}
  //   </View>
  // );

  return (
    <View>
      <Image
        style={{
          position: 'absolute',
          left: xBody,
          top: yBody,
          width: widthBody,
          height: Constants.windowHeight + 25,
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
