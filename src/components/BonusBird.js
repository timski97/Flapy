// import Matter from 'matter-js';
// import React, {useEffect, useRef} from 'react';
// import {Image, Animated} from 'react-native';
// import {Images} from '../../utils/Images';

// const BonusBird = props => {
//   // const animatedValue = useRef(new Animated.Value(props.body.velocity.y));

//   const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
//   const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

//   const xBody = props.body.position.x - widthBody / 2;
//   const yBody = props.body.position.y - heightBody / 2;
//   let imageBonus = Images['bonusBird' + props.poseBonus];
//   return (
//     <Image
//       style={{
//         position: 'absolute',
//         left: xBody,
//         top: yBody,
//         width: widthBody,
//         height: heightBody,
//         // transform: [{rotate: rotation}],
//       }}
//       resizeMode="stretch"
//       source={imageBonus}
//     />
//   );
// };

// export default (world, color, pos, size, label) => {
//   const initialBonusBird = Matter.Bodies.rectangle(
//     pos.x,
//     pos.y,
//     size.width,
//     size.height,
//     {
//       label,
//       isStatic: true,
//     },
//   );
//   Matter.World.add(world, initialBonusBird);

//   return {
//     body: initialBonusBird,
//     pos,
//     renderer: <BonusBird />,
//   };
// };
