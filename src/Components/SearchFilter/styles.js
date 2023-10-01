import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  movieBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: 330,
    borderRadius: 10,
    borderColor: '#4f4e4e',
    borderWidth: 1,
    marginVertical: 20,
  },
  blockName: {
    textAlign: 'center',
    marginBottom: 5,
    paddingVertical: 5,
    paddingLeft: 5,
    color: '#838583',
    fontSize: 13,
  },
  blockNameBox: {
    textAlign: 'center',
    height: 20,
    width: 330,
    borderRadius: 20,
    backgroundColor: '#4f4e4e',
  },
  movieCentralBlock: {
    flexDirection: 'row',
  },
  centralBlockTextBox: {
    textAlign: 'center',
    height: 20,
    width: 100,
    marginHorizontal: 5,
    backgroundColor: '#4f4e4e',
  },
  centralBlockGroup: {
    flexDirection: 'column',
  },
  blockAboutMovie: {
    textAlign: 'center',
    height: 50,
    width: 330,
    backgroundColor: '#4f4e4e',
  },
  deleteButton: {
    paddingHorizontal: 10,
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: '#fd5e53',
  },
  deleteText: {
    color: '#d8dad8',
    textAlign: 'center',
    fontSize: 16,
  },
});
