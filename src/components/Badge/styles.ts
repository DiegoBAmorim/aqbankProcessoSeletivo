import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY_200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    gap: 5,

    flexShrink: 1,
  },
  text: {
    fontSize: 12,
  },
});
