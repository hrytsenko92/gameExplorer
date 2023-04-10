import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
type PropType = {
  width: string;
  height: string;
  fill?: string;
};
const SettingSVG = ({width, height}: PropType) => {
  return (
    <Svg
      style={{
        width: width,
        height: height,
      }}
      viewBox="0 0 24 24"
      fill="none">
      <G id="SVGRepo_bgCarrier" stroke-width="0" />
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          opacity="0.4"
          d="M22 7.81V16.19C22 19 20.71 20.93 18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
          fill="#737b8b"
        />
        <Path
          d="M18.4406 21.66C17.7806 21.89 17.0206 22 16.1906 22H7.81055C6.98055 22 6.22055 21.89 5.56055 21.66C5.91055 19.02 8.67055 16.97 12.0005 16.97C15.3305 16.97 18.0906 19.02 18.4406 21.66Z"
          fill="#ffc52f"
        />
        <Path
          d="M15.5799 11.58C15.5799 13.56 13.9799 15.17 11.9999 15.17C10.0199 15.17 8.41992 13.56 8.41992 11.58C8.41992 9.60002 10.0199 8 11.9999 8C13.9799 8 15.5799 9.60002 15.5799 11.58Z"
          fill="#5a6271"
        />
      </G>
    </Svg>
  );
};
export default SettingSVG;
