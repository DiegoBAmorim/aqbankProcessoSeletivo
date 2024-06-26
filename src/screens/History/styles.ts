import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
  },
  container: {
    // alignItems: 'center',
    marginTop: 40,
  },
  card: {
    gap: 12,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 68,
    width: 335,
    gap: 16,
    paddingLeft: 12,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.NEUTRO_200,
  },
});
