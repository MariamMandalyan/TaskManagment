import { StyleSheet } from 'react-native';
import { pixel } from '../../utils/pixel';
import { darkBlue, primaryWhite, red } from '../../utils/colors';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixel(16),
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: pixel(12),
    backgroundColor: primaryWhite
  },
  textInput: {
    color: darkBlue,
    fontSize: pixel(14),
    paddingVertical: pixel(13),
  },
  errorMessage: {
    color: red,
    fontSize: pixel(12),
  },
  leftIcon: {
    marginRight: pixel(4)
  },
  subContainer: {
    flex: 1
  },
});

export default style;
