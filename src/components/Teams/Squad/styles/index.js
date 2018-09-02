import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  mx40: {
    marginLeft: 40,
    marginRight: 40,
  },
  h60w60: {
    height: 60, width: 60,
  },
  iconsContainer: {
    marginTop: 35,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPlayersText: {
    color: 'rgba(0,0,0,.4)',
    marginTop: 30,
    fontSize: 14,
    fontFamily: 'calibri-italic',
    textAlign: 'center',
  },
  invitePlayersSecondaryContainer: {
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 25,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  plusIcon: {
    fontSize: 100,
    marginTop: 30,
    marginBottom: 30,
    color: '#0071c0',
  },
  secondaryText: {
    color: 'rgba(0,0,0,.4)',
    marginTop: 30,
    fontSize: 14,
    fontFamily: 'calibri-italic',
    textAlign: 'center',
  },
  titleText: {
    color: 'rgba(0,0,0,.7)',
    fontSize: 20,
    fontFamily: 'calibri-italic',
    textAlign: 'center',
  },
  invitePlayersTitleContainer: {
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    width: width - 25,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  invitePlayersContainer: {
    flex: 1, backgroundColor: '#fff',
  },
  h25w25: {
    height: 25,
    width: 25,
  },
  h100w100: {
    width,
    height,
  },
  labelText: {
    color: '#0071c0',
    fontFamily: 'calibri-italic',
  },
  bgBlue: {
    backgroundColor: '#0071c0',
  },
  disabledTab: {
    fontFamily: 'calibri-italic',
  },
  activeTab: {
    fontFamily: 'calibri-italic',
    color: '#0071c0',
  },
  flexCenterColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  navigationText: {
    fontFamily: 'calibri',
    fontSize: 20,
    color: '#fff',
  },
  hrLineSecondary: {
    borderBottomStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  borderRadiusCircle: {
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#fff',
  },
  playerFollowingButton: {
    borderRadius: 41,
    backgroundColor: '#0071c0',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
  },
  playerFollowingButtonText: {
    fontFamily: 'calibri',
    fontSize: 13,
    color: '#fff',
  },
  playerFollowButton: {
    borderRadius: 41,
    borderColor: '#0071c0',
    borderWidth: 0.8,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
  },
  playerFollowButtonText: {
    fontFamily: 'calibri',
    fontSize: 13,
    color: '#0071c0',
  },
  playerCardContainer: {
    justifyContent: 'center',
    width: width - 25,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  playerCard: {
    marginTop: 10,
    marginBottom: 10,
    elevation: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenterRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  playerCardName: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  nameText: {
    fontFamily: 'calibri-italic',
    color: '#000',
    fontSize: 15,
  },
  tagText: {
    fontFamily: 'calibri-italic',
    color: 'rgba(0,0,0,.3)',
    fontSize: 11,
  },
  descText: {
    fontFamily: 'calibri-italic',
    color: 'rgba(0,0,0,.3)',
    fontSize: 13,
  },
};
