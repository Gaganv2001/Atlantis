import {StyleSheet} from 'react-native';
import Color from '../../constants/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  itemContainer: {
    // padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
  },
  rating: {
    fontSize: 14,
    color: 'gray',
  },
});
export default styles;
