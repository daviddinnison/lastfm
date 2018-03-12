import createStyles, {
  colors,
  dimensions,
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
    backgroundColor: colors.textDefault,
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
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'nowrap',
    justifyContent: 'center'
  },

  artistImage: {
    height: dimensions.fullHeight * .4,
    width: dimensions.fullWidth * .7,
    marginBottom: margin.md
  },

  // tags

  renderedTags: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: margin.sm,
    marginLeft: margin.sm
  },

  renderedTagSingle: {
    // backgroundColor: colors.quadrary,
    borderColor: colors.quadrary,
    borderWidth: 2,
    color: colors.quadrary,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
    margin: margin.xs,
    padding: padding.xs
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
  albumMetaFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  albumsMainBackground: {
    backgroundColor: colors.white
  },

  albumName: {
    color: colors.textDefault,
    fontFamily: fonts.primary,
    fontSize: fonts.xl,
    fontWeight: 'bold',
  },

  albumArtistNameHead: {
    color: colors.textDefault,
    fontFamily: fonts.primary,
    fontSize: fonts.md,
    fontWeight: 'bold',

  },

  icon: {
    height: 15,
    // paddingRight: padding.md,
    marginHorizontal: margin.sm,
    width: 15
  },

  // tracks
  tracksMainBackground: {
    backgroundColor: colors.white
  },

  trackContainer: {
    paddingVertical: padding.sm,
    paddingHorizontal: padding.sm,
    marginVertical: margin.xs,
    marginHorizontal: margin.sm
  },
  trackHead: {
    color: colors.white,
    fontFamily: fonts.primary,
    marginLeft: margin.md
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
