import { StyleSheet } from 'react-native';
import { pixel } from '../../utils/pixel';
import { gray } from '../../utils/colors';

const style = StyleSheet.create({
   flex: {
    flex: 1
   },
   taskItem: {
    padding: pixel(15),
    borderBottomWidth: 1,
    borderColor: gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: pixel(15)
  },
});

export default style;
