import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
type PropType = {
  width: string;
  height: string;
};
const Nintendo = ({width, height}: PropType) => {
  return (
<Svg viewBox="0 0 21 16"><Path fill="#FFF" fill-rule="evenodd" d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"></Path></Svg>
)};

export default Nintendo;
