import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  w20: {
    width: 20,
  },
  fontSize10: {
    fontSize: 10,
  },
  searchPlayer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.2)',
    marginLeft: 15,
    width: width - 100,
    paddingBottom: 5,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  bgImage: {
    height: '50%',
    resizeMode: 'contain',
  },
  pl80: {
    paddingLeft: 80,
  },
  flexStartRowItemsCenter: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowItemsCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
  settingsIcon: {
    fontSize: 18,
    color: '#3d6688',
  },
  pt20: {
    paddingTop: 20,
  },
  displayFlexRowBasic: {
    display: 'flex',
    flexDirection: 'row',
  },
  scoreAltContent: {
    flex: 1,
    paddingTop: 20,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  colorScoreBlue: {
    color: '#0070c0',
  },
  scoreContainer: {
    flex: 1,
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  scoreContent: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  colorGreen: {
    color: '#42ad25',
  },
  colorRed: {
    color: '#e30000',
  },
  conutryContainer: {
    flex: 1,
    addingTop: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
  },
  flexStartRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  h5w5: {
    height: 50,
    width: 50,
  },
  pl5: {
    paddingLeft: 5,
  },
  mt10: {
    marginTop: 10,
  },
  flexSpaceBetweenRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  hrLineSecondary: {
    borderBottomStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  hrLine: {
    marginTop: 8,
    borderBottomStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  skillPillContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBototm: 10,
  },
  colorLightBlue: {
    color: '#006dbf',
  },
  ml10: {
    marginLeft: 10,
  },
  fontSize30: {
    fontSize: 30,
  },
  fontBasic: {
    fontFamily: 'calibri',
  },
  mt20: {
    marginTop: 20,
  },
  playerFollowingButtonText: {
    fontFamily: 'calibri-bold',
    fontSize: 13,
    color: '#fff',
  },
  playerFollowButtonText: {
    fontFamily: 'calibri-bold',
    fontSize: 13,
    color: '#0071c0',
  },
  skillPillScore: {
    marginLeft: 2,
    borderRadius: 41,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#0071c0',
    padding: 3,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  skillPill: {
    borderRadius: 41,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#0071c0',
    padding: 3,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  skillPillText: {
    fontFamily: 'calibri-italic',
    fontSize: 16,
    color: '#fff',
  },
  playerFollowingButton: {
    borderRadius: 41,
    backgroundColor: '#0071c0',
    padding: 3,
    paddingLeft: 12,
    paddingRight: 12,
    marginLeft: 12,
  },
  playerFollowButton: {
    borderRadius: 41,
    borderColor: '#0071c0',
    borderWidth: 0.8,
    padding: 3,
    paddingLeft: 12,
    paddingRight: 12,
    marginLeft: 12,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  borderRadiusCircle: {
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    top: 56,
    zIndex: 1000,
    marginLeft: 15,
  },
  fontSize15: {
    fontSize: 15,
  },
  colorGray: {
    color: 'gray',
  },
  fontSize20: {
    fontSize: 20,
  },
  fontItalic: {
    fontFamily: 'calibri-italic',
  },
  colorBlack: {
    color: '#000',
  },
  profileContentMainCardOverflow: {
    overflow: 'visible',
    width: width - 50,
    paddingTop: 100,
    backgroundColor: 'transparent',
  },
  profileContentMainPadding: {
    padding: 18,
    paddingTop: 0,
  },
  profileContentSecondaryCard: {
    overflow: 'visible',
    width: width - 50,
    backgroundColor: '#fff',
    paddingTop: 8,
  },
  profileContentMainCard: {
    overflow: 'visible',
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 8,
  },
  profileContentCard: {
    width: width - 50,
    backgroundColor: '#fff',
    padding: 18,
  },
  profileContent: {
    backgroundColor: 'transparent',
    height: '100%',
    marginTop: 40,
    paddingBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pl30: {
    paddingLeft: 30,
  },
  flex1: {
    flex: 1,
  },
  flex025: {
    flex: 0.25,
  },
  flex05: {
    flex: 0.5,
  },
  py30: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  flexCenterCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  alignFlexStart: {
    alignItems: 'flex-start',
  },
  flexCenterRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerContainer: {
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,.9)',
    elevation: 4,
    height: 50,
  },
};
