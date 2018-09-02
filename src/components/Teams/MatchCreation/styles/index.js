import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
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
  bottomMainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'calibri-italic',
    textAlign: 'center',
  },
  footerButton: {
    backgroundColor: '#0071c0',
    color: '#fff',
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 16,
    paddingBottom: 16,
    elevation: 7,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  footer: {
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  createMatchContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  createMatchContent: {
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    width: width - 50,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  navigationText: {
    fontFamily: 'calibri',
    fontSize: 20,
    color: '#fff',
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
    fontSize: 18,
    paddingTop: 6,
    paddingBottom: 6,
  },
  activeTab: {
    fontFamily: 'calibri-italic',
    color: '#0071c0',
    fontSize: 18,
    paddingTop: 6,
    paddingBottom: 6,
  },
  flexCenterColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
};
