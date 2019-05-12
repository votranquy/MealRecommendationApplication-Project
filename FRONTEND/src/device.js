import { Dimensions, StatusBar, Platform } from 'react-native';

const android = Platform.OS === 'android';
const iOS = Platform.OS === 'ios';
const statusBarHeight = android ? StatusBar.currentHeight : 20;

let screenWidth;
let screenHeight;
let viewportHeight;
let isPortrait;
let isLandscape;

// Need to run again when rotating screen
export function refresh() {
  const window = Dimensions.get('window');
  screenWidth = window.width;
  screenHeight = window.height;
  isPortrait = screenHeight > screenWidth;
  isLandscape = !isPortrait;
  viewportHeight = screenHeight - statusBarHeight;
}

refresh();

const minSize = Math.min(screenHeight, screenWidth);
const isPhone = minSize < 600;
const isTablet = !isPhone;

const device = {
  android,
  iOS,
  isPhone,
  isTablet,
  screenWidth,
  screenHeight,
  statusBarHeight,
  viewportHeight,
  isPortrait,
  isLandscape,
};

console.log('Device information', device);

export default device;
