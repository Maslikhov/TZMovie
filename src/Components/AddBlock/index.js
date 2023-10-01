import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {RouteNames} from '../../Navigation/configs';
import {useNavigation} from '@react-navigation/native';
import localization from '../../Assets/localization.json';
import mirage from '../Mirage';
import SearchFilter from '../SearchFilter';

function AddBlock() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(RouteNames.HomeScreen);
  };
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    mirage();
    fetch('/api/movies')
      .then(res => res.json())
      .then(json => setMovie(json.movies));
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nextScreenButton} onPress={onPress}>
        <Text style={styles.textButton}>{localization.actions.Home}</Text>
      </TouchableOpacity>
      <TextInput
        value={input}
        onChangeText={text => {
          setInput(text);
        }}
        placeholderTextColor={'white'}
        placeholder={'Search'}
        style={styles.searchContainer}
      />
      <SearchFilter data={movie} input={input} />
    </View>
  );
};

export default AddBlock;
