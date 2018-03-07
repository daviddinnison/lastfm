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
  artistInfoHeader: {
    backgroundColor: colors.primary
  },

  artistName: {
    backgroundColor: colors.primary,
    borderBottomColor: colors.tertiary,
    borderBottomWidth: 3,
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fonts.xl,
    fontWeight: 'bold',
    marginBottom: margin.md,
    padding: padding.md
  },

  infoHeader: {
    backgroundColor: colors.secondary,
    fontFamily: fonts.primary,
    fontSize: fonts.md,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  // album image
  albumImage: {
    height: 162,
    marginBottom: margin.md,
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
    backgroundColor: colors.white,
  },


  // tracks
  tracksMainBackground: {
    backgroundColor: colors.white,
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
    fontFamily: fonts.primary
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
