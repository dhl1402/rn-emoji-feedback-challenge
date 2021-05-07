import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function NormalFace({radius, backgroundColor}) {
  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox="0 0 500 500"
      fill="none"
    >
      <Circle cx={250} cy={250} r={250} fill={backgroundColor} />
      <Path
        d="M212.124 373.8c4.694-.63 11.782-1.795 12.876-1.976.099-.017.19-.031.29-.045 1.019-.148 7.137-1.042 11.175-1.779 5.255-.959 13.184-2.501 14.523-2.762.133-.026.258-.048.392-.07 1.343-.222 9.272-1.53 14.521-2.368 5.683-.907 14.526-2.27 14.715-2.3h.006c.19-.03 9.7-1.508 15.809-2.5 8.15-1.323 12.743-1.635 20.85-3.2 8.084-1.561 15.428-1.3 20.598-4.8 5.726-3.877 4.869-14.279 4.658-16.195a5.652 5.652 0 00-.1-.605c-.399-1.785-2.823-11.034-10.781-14.324a8.456 8.456 0 00-2.078-.539c-5.494-.77-9.815-.25-15.523.163-6.75.919-15.97 2.681-17.426 2.962a18.36 18.36 0 01-.397.071c-1.41.23-9.977 1.628-15.613 2.467-5.766.858-8.987 1.53-14.718 2.6-5.337.997-13.405 2.205-14.574 2.379-.1.014-.193.029-.292.046l-14.57 2.475-11.321 2-12.873 1.681-.288.04c-1.088.165-8.21 1.236-12.879 1.779-5.212.607-12.889 2.046-14.814 2.413-.303.058-.598.105-.903.147-2.225.302-12.118 1.731-17.662 3.94-7.934 3.843-8.659 12.847-8.717 15.021-.009.32-.01.631-.005.951.037 2.42.78 13.426 11.132 16.028 6.813 1.712 9.585.403 15.704 0 6-.395 9.297-1.269 15.265-2 5.08-.622 7.947-1.019 13.02-1.7z"
        fill="#FFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M164 239c19.33 0 35-15.67 35-35s-15.67-35-35-35-35 15.67-35 35 15.67 35 35 35zm171 0c19.33 0 35-15.67 35-35s-15.67-35-35-35-35 15.67-35 35 15.67 35 35 35z"
        fill="#FFF"
      />
    </Svg>
  );
}

export default NormalFace;