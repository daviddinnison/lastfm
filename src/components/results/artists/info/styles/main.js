import createStyles, {
  colors,
  fonts,
  margin,
  padding
} from "../../../../baseStyles";
export default (singleArtistInfo = createStyles({
  // header
  artistName: {
    backgroundColor: colors.primary,
    color: colors.secondary,
    fontFamily: fonts.primary,
    fontSize: fonts.xl,
    fontWeight: "bold",
    marginBottom: margin.md,
    padding: padding.md
  },

  // album image
  albumImage: {
    height: 162,
    width: 162
  },

  // tags

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
