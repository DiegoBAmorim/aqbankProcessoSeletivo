import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY_200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 3,

    gap: 5,
  },
  text: {
    fontSize: 12,
  },
});
