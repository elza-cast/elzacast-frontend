import { Platform, StatusBar } from 'react-native';

const statusBarHeight = Platform.OS === 'ios' ? 35 : StatusBar.currentHeight || 20;

const metrics = {
  headerHeight: `${statusBarHeight + 48}px`,
};

export default metrics;
