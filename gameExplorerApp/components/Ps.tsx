import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
type PropType = {
  width: string;
  height: string;
  fill: string;
};
const Ps = ({width, height, fill}: PropType) => {
  return (
    <Svg viewBox="0 0 21 16" width={width} height={height}>
      <Path
        d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"
        fill={fill}
      />
    </Svg>
  );
};

export default Ps;
