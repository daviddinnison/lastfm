import createStyles, { colors, dimensions, fonts, padding } from "../../../baseStyles";

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
    alignSelf: "center",
    flex: 3
  }
}));
