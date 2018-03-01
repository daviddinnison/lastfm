import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export const colors = {
  primary: "#226B74",
  secondary: "#254B5A",
  tertiary: "#5DA6A7",
  affirmative: "#008000",
  negative: "#800000"
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
  primary: "Cochin"
};

const baseStyles = {
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  header: {
    backgroundColor: "transparent",
    fontSize: fonts.xl,
    fontFamily: fonts.primary,
    fontWeight: "bold"
  },
  subheader: {
    backgroundColor: "transparent",
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    fontWeight: "bold"
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
