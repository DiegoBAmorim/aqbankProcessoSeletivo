import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: Colors.PRIMARY_950,
  },
  headerWrapper: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  badgeWrapper: {
    flexDirection: 'row',
    gap: 11,
  },
});
