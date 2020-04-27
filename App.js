import React, {useRef} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Animated from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

import Face from './src/components//Face';

import emoji from './src/assets/emoji.json';

const {createAnimatedComponent, event, Value, divide} = Animated;

const AnimatedLottie = createAnimatedComponent(LottieView);

const {width} = Dimensions.get('window');
const faceRadius = width / 10 - 8;

const App = () => {
  const scrollX = useRef(new Value(0)).current;
  const scrollViewRef = useRef();
  const happiness = divide(scrollX, width - faceRadius * 2);

  const snapToNearestHappiness = e => {
    const {x} = e.nativeEvent.contentOffset;
    const scrollWidth = width - faceRadius * 2;
    const levels = [0, 0.25, 0.5, 0.75, 1];
    const diffs = levels.map(level => x / scrollWidth - level);
    const minDiff = [...diffs].sort(
      (l1, l2) => Math.abs(l1) >= Math.abs(l2),
    )[0];
    const nearestHappiness = levels[diffs.indexOf(minDiff)];
    scrollViewRef.current.getNode().scrollTo({
      x: nearestHappiness * scrollWidth,
      animated: true,
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.faces}>
        <View style={styles.link} />
        <Face happiness={0} radius={faceRadius} />
        <Face happiness={0.25} radius={faceRadius} />
        <Face happiness={0.5} radius={faceRadius} />
        <Face happiness={0.75} radius={faceRadius} />
        <Face happiness={1} radius={faceRadius} />
      </View>
      <AnimatedLottie
        style={[
          StyleSheet.absoluteFill,
          {transform: [{translateX: scrollX}], width: faceRadius * 2},
        ]}
        source={emoji}
        progress={happiness}
      />
      <Animated.ScrollView
        ref={scrollViewRef}
        style={[StyleSheet.absoluteFill, {transform: [{scaleX: -1}]}]}
        contentContainerStyle={{width: 2 * (width - faceRadius)}}
        horizontal
        bounces={false}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        onScroll={event([{nativeEvent: {contentOffset: {x: scrollX}}}])}
        onScrollEndDrag={snapToNearestHappiness}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  faces: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    position: 'absolute',
    height: 2,
    width,
    backgroundColor: '#d4dadd',
  },
});

export default App;
