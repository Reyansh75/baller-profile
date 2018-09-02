import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
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
    fontSize: 14,
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
