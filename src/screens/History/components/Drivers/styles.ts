import {StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 42,
  },
  loading: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
