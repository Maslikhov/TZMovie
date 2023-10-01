import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RouteNames} from '../../Navigation/configs';
import localization from '../../Assets/localization.json';
import styles from './styles';
import {Text, TouchableOpacity} from "react-native";
import {useAuth0} from "react-native-auth0";


const Login = () => {
  const {authorize, user, isLoading} = useAuth0();

  const navigation = useNavigation();

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
      navigation.navigate(RouteNames.HomeScreen);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
      <Text style={styles.loginText}>{localization.actions.Login}</Text>
    </TouchableOpacity>
  );
};

export default Login;
