import createStyles, {
  colors,
  dimensions,
  fonts,
  padding
} from "../../../baseStyles";

export default (singleArtistInfo = createStyles({
  image: {
    alignSelf: "stretch",
    flex: 1,
    height: undefined,
    width: undefined
  },
  resultContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    padding: padding.sm
  },
  resultInfo: {
    backgroundColor: "red",
    alignSelf: "center",
    flex: 3,
    height: undefined,
    width: undefined
  },
  resultName: {
    fontFamily: fonts.primary,
    fontSize: fonts.lg,
    fontWeight: "bold"
  }
}));
