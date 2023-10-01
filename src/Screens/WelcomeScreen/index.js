import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Login from '../../Components/LoginButton';
function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.welcomeText}> Welcome Movie Inform</Text>
      </View>
      <Login />
    </View>
  );
}

export default WelcomeScreen;
