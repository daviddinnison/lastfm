import createStyles, {
  colors,
  fonts,
  margin,
  padding
} from '../../../../baseStyles';

export default (singleArtistInfo = createStyles({
  artistInfoContainer: {
    backgroundColor: colors.secondary
  },

  // header
  artistHead: {
    backgroundColor: colors.primary
  },

  artistName: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fonts.xl,
    fontWeight: 'bold',
    marginBottom: margin.sm,
    padding: padding.md
  },

  infoHeader: {
    color: colors.textDefault,
    fontFamily: fonts.secondary,
    fontSize: fonts.md,
    fontWeight: 'bold'
  },

  // album image
  imageContainer: {
    backgroundColor: colors.white,
    borderTopColor: colors.tertiary,
    borderTopWidth: 4,
    height: 180,
    width: 180,
    marginLeft: margin.md,
    marginBottom: margin.md,
  },
  artistImage: {
    height: 162,
    width: 162
  },

  // tags

  // tour
  onTour: {
    fontFamily: fonts.primary,
    color: colors.affirmative
  },
  notTouring: {
    fontFamily: fonts.primary,
    color: colors.negative
  },

  // albums
  albumsMainBackground: {
    backgroundColor: colors.white
  },

  // tracks
  tracksMainBackground: {
    backgroundColor: colors.white
  },

  trackContainer: {
    paddingVertical: padding.sm,
    paddingHorizontal: padding.sm,
    marginVertical: margin.sm,
    marginHorizontal: margin.sm
  },
  trackName: {
    color: colors.textDefault,
    fontWeight: 'bold',
    fontFamily: fonts.secondary
  },
  trackPlays: {
    color: colors.textDefault,
    fontStyle: 'italic',
    fontFamily: fonts.primary
  },

  // bio
  bioText: {
    color: colors.textDefault,
    fontFamily: fonts.primary
  }
}));
