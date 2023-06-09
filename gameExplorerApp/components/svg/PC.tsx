import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
type PropType = {
  width: string;
  height: string;
  fill: string;
};
const PC = ({width, height, fill}: PropType) => {
  return (
    <Svg viewBox="0 0 16 16" width={width} height={height}>
      <Path
        d="M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z"
        fill={fill}
      />
    </Svg>
  );
};

export default PC;
