import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#181818',
    paddingBottom: 90,
  },
  nextScreenButton: {
    marginHorizontal: 20,
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: '#343333',
  },
  textButton: {
    color: '#b1b4b1',
    textAlign: 'center',
    paddingHorizontal: 30,
    fontSize: 16,
    fontWeight: '700',
  },
  blockName: {
    color: '#838583',
    textAlign: 'left',
    fontSize: 13,
  },
  blockNameBox: {
    height: 30,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#4f4e4e',
  },
  inputBlock: {
    marginBottom: 30,
  },
  searchContainer: {
    width: 330,
    fontSize: 20,
    backgroundColor: '#343333',
    color: 'white',
    paddingVertical: 10,
    paddingLeft: 5,
    borderRadius: 10,
    marginBottom: 15,
  },
});
