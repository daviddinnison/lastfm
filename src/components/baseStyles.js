import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  primary: '#425788', // dark blue
  secondary: '#86E1FF', //tealE
  // secondary: '76B39D', //teal
  
  tertiary: '#F0B917', // yellow
  white: '#FFFFFF',
  offWhite: '#F9F8EB',
  textDefault: '#323232',
  affirmative: '#008000',
  negative: '#800000'
};

export const padding = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const margin = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 22,
  xl: 28,
  primary: 'serif',
  secondary: 'sans-serif'
};

const baseStyles = {
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  header: {
    backgroundColor: 'transparent',
    fontFamily: fonts.primary,
    fontSize: fonts.xl,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    alignSelf: 'stretch',
    flex: 1,
    height: undefined,
    width: undefined
  },
  subHeader: {
    backgroundColor: 'transparent',
    fontFamily: fonts.primary,
    fontSize: fonts.md,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  mainSection: {
    paddingVertical: padding.xs,
    paddingHorizontal: padding.xs
  },
  mainText: {
    fontFamily: fonts.primary
  }
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({ ...baseStyles, ...overrides });
}
