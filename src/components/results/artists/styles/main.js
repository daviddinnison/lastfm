import createStyles, {
  colors,
  dimensions,
  fonts,
  margin,
  padding
} from '../../../baseStyles';

export default (singleArtistInfo = createStyles({
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
  originalArtistTagContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    padding: padding.sm
  },
  originalArtistTagText: {
    backgroundColor: 'red',
    alignSelf: 'center',
    height: undefined,
    width: undefined
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
