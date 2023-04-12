import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
type PropType = {
  width: string;
  height: string;
  fill: string;
};
const OthersPlatforms = ({width, height, fill}: PropType) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={fill}
        d="M15.5 6H13V4a1 1 0 0 0-2 0v2H8.5a7.5 7.5 0 0 0 0 15h7a7.5 7.5 0 0 0 0-15Zm0 13h-7a5.5 5.5 0 0 1 0-11h7a5.5 5.5 0 0 1 0 11ZM11 13.5a1 1 0 0 1-1 1H9v1a1 1 0 0 1-2 0v-1H6a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm8-1.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm-2 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"
      />
    </Svg>
  );
};
export default OthersPlatforms;
