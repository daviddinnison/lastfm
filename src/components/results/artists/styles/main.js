import createStyles, {
  colors,
  dimensions,
  fonts,
  margin,
  padding
} from '../../../baseStyles';

export default (singleArtistInfo = createStyles({
  image: {
    alignSelf: 'stretch',
    flex: 1,
    height: undefined,
    width: undefined
  },
  originalArtistContainer: {
    backgroundColor: colors.primary,
    margin: margin.sm,
    padding: padding.sm
  },
  originalArtistHeader: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fonts.xl,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  resultContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    padding: padding.sm
  },
  resultInfo: {
    backgroundColor: 'red',
    alignSelf: 'center',
    flex: 3,
    height: undefined,
    width: undefined
  },
  resultName: {
    fontFamily: fonts.primary,
    fontSize: fonts.lg,
    fontWeight: 'bold'
  }
}));
