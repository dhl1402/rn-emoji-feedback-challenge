import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function GreatFace({radius, backgroundColor}) {
  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox="0 0 500 500"
      fill="none"
    >
      <Circle cx={250} cy={250} r={250} fill={backgroundColor} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M165 239c19.33 0 35-15.67 35-35s-15.67-35-35-35-35 15.67-35 35 15.67 35 35 35zm171 0c19.33 0 35-15.67 35-35s-15.67-35-35-35-35 15.67-35 35 15.67 35 35 35z"
        fill="#FFF"
      />
      <Path
        d="M201 403.5c7.169 1.709 11.229 2.523 18.5 3.723 6.377 1.053 15.973 2.122 18.195 2.365.316.034.624.057.942.068 2.316.079 12.665.396 19.566-.017 7.178-.43 17.938-2.087 19.768-2.374.183-.028.36-.06.541-.097l19.765-3.968 18.086-5.085c.273-.077.54-.16.807-.256 2.401-.856 15.118-5.492 22.863-10.359 6.555-4.119 15.387-11.488 17.752-13.487.406-.344.775-.698 1.132-1.094 2.737-3.034 15.35-17.36 20.083-28.919 5.5-14 3.154-28-9.5-28H238.166c-7.383-.707-11.376 0-18.666 0h-35-55c-12 0-16.5 11.5-9 28 7.147 15.723 19.742 28.268 20.912 29.415l.185.182c7.265 7.252 12.484 10.241 21.403 15.403 7.013 4.059 18.215 8.671 20.905 9.761.396.16.795.298 1.206.418 2.266.662 10.351 3.001 15.889 4.321z"
        fill="#FFF"
      />
    </Svg>
  );
}

export default GreatFace;