import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 2,
    backgroundColor: Colors.PRIMARY_950,
  },
  lastRaceContainer: {
    flex: 2,

    paddingHorizontal: 20,
  },
  historyContainer: {
    flex: 1.5,
    backgroundColor: Colors.PRIMARY_50,
    paddingHorizontal: 20,
  },
});
