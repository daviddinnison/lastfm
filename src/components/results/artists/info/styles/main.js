import createStyles, {
  colors,
  fonts,
  padding,
  margin
} from "../../../../baseStyles";
export default (singleArtistInfo = createStyles({
  // tour
  onTour: {
    color: colors.affirmative
  },
  notTouring: {
    color: colors.negative
  },

  // tracks
  trackContainer: {
    paddingVertical: padding.sm,
    paddingHorizontal: padding.sm,
    marginVertical: margin.sm,
    marginHorizontal: margin.sm
  },
  trackName: {
    fontWeight: "bold",
    fontFamily: fonts.primary
  },
  trackPlays: {
    fontStyle: "italic",
    fontFamily: fonts.primary
  }
}));
