import {useNavigation} from '@react-navigation/native';
import {RouteNames} from '../../Navigation/configs';
import styles from './styles';
import localization from '../../Assets/localization.json';
import {Text, TouchableOpacity} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const Logout = () => {
  const {clearSession} = useAuth0();

  const navigation = useNavigation();

  const onLogout = async () => {
    try {
      await clearSession();
      navigation.navigate(RouteNames.WelcomeScreen);
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
      <Text style={styles.textButton}>{localization.actions.Logout}</Text>
    </TouchableOpacity>
);
};
export default Logout;
