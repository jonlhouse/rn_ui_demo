module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // Caution: Reanimated plugin has to be listed last. (https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/)
    'react-native-reanimated/plugin',
  ],
};
