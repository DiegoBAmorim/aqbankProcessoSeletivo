import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  lastRace: {
    flex: 2,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  history: {
    flex: 1.4,
    backgroundColor: Colors.PRIMARY_50,
    paddingHorizontal: 20,
  },
});
