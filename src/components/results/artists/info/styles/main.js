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
    backgroundColor: colors.primary,
    marginBottom: margin.md
  },

  artistName: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fonts.xl,
    fontWeight: 'bold',
    marginBottom: margin.sm,
    padding: padding.md,
    paddingBottom: padding.sm,
    textShadowColor: colors.tertiary,
    textShadowOffset: {
      height: 2,
      width: 2
    },
    textShadowRadius: 15
  },

  infoHeader: {
    color: colors.textDefault,
    fontFamily: fonts.secondary,
    fontSize: fonts.md,
    fontWeight: 'bold'
  },

  // album image
  artistMetaData: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap'

  },

  artistImage: {
    height: 162,
    width: 162
  },

  // tags

  renderedTags: {
    flexDirection: 'row'
  },
  
  renderedTagSingle: {
    backgroundColor: colors.white,
    borderColor: colors.tertiary,
    borderWidth: 5,
    color: colors.tertiary,
    flex: 1,
    marginRight: margin.sm,
    paddingLeft: padding.sm
  },

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

  albumNameHead: {
    color: colors.white,
    fontFamily: fonts.primary,
    marginLeft: margin.lg
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
    backgroundColor: colors.white,
    color: colors.textDefault,
    fontFamily: fonts.primary,
    fontSize: fonts.md,
    padding: padding.sm
  }
}));
