// import Matter from 'matter-js';
// import React from 'react';
// import {Image, View, StyleSheet} from 'react-native';
// import {Images} from '../../utils/Images';

// export const Coins = props => {
//   const widthBody = Math.round(
//     props.body.bounds.max.x - props.body.bounds.min.x,
//   );
//   const heightBody = Math.round(
//     props.body.bounds.max.y - props.body.bounds.min.y,
//   );
//   const xBody = Math.round(props.body.position.x - widthBody / 2);
//   const yBody = Math.round(props.body.position.y - heightBody / 2);
//   // const yBody = 200;
//   // console.log(widthBody);
//   const color = props.color;
//   return (
//     <Image
//       style={{
//         position: 'absolute',
//         left: xBody,
//         top: props.body.position.y,
//         width: 41,
//         height: 41,

//         // overflow: 'hidden',
//         // flexDirection: 'column',
//         zIndex: 100000,
//       }}
//       resizeMode="stretch"
//       source={Images.coins}
//     />
//   );
// };

// export default (world, label, pos, size) => {
//   const initialCoins = Matter.Bodies.rectangle(
//     pos.x,
//     pos.y,
//     size.width,
//     size.height,
//     {
//       label,
//       isStatic: true,
//     },
//   );
//   Matter.World.add(world, initialCoins);

//   return {
//     body: initialCoins,
//     pos,

//     renderer: <Coins />,
//   };
// };

// {
//   /* <Coins />,
// initialCoins, */
// }
// // import Matter from 'matter-js';
// // import React from 'react';
// // import {Image, StyleSheet, View} from 'react-native';
// // import {Images} from '../../utils/Images';

// // export const Coins = props => {
// //   const widthBody = Math.round(
// //     props.body.bounds.max.x - props.body.bounds.min.x,
// //   );
// //   const heightBody = Math.round(
// //     props.body.bounds.max.y - props.body.bounds.min.y,
// //   );
// //   const xBody = Math.round(props.body.position.x - widthBody / 2);
// //   const yBody = Math.round(props.body.position.y - heightBody / 2);
// //   const color = props.color;

// //   console.log('Obstacle', yBody);
// //   // console.log('CoinsxO', xBody);

// //   return (
// //     <Image
// //       style={
// //         styles({
// //           widthBody,
// //           heightBody,
// //           xBody,
// //           yBody,
// //           color,
// //         }).obstacle
// //       }
// //       source={Images.column}
// //     />
// //   );
// // };

// // export default (world, label, pos, size) => {
// //   const initialCoins = Matter.Bodies.rectangle(
// //     pos.x,
// //     pos.y,
// //     size.width,
// //     size.height,
// //     {
// //       label,
// //       isStatic: true,
// //     },
// //   );
// //   Matter.World.add(world, initialCoins);

// //   return {
// //     body: initialCoins,
// //     pos,

// //     renderer: <Coins />,
// //   };
// // };
// // export const styles = ({xBody, yBody, widthBody, heightBody, color}) =>
// //   StyleSheet.create({
// //     obstacle: {
// //       position: 'absolute',
// //       left: xBody,
// //       top: yBody,
// //       width: widthBody,
// //       height: heightBody,
// //       resizeMode: 'stretch',
// //     },
// //   });
