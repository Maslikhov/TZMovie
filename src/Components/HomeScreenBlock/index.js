import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import localization from '../../Assets/localization.json';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {RouteNames} from '../../Navigation/configs';
import Logout from '../../Components/LogoutButton';
import {deleteMovie, sortMovie, selectCount} from '../Redux/CounterSlice';
import {useSelector, useDispatch} from 'react-redux';

function HomeScreenBlock() {
  const navigation = useNavigation();
  const movie = useSelector(selectCount);
  const dispatch = useDispatch();

  const onPressAdd = () => {
    navigation.navigate(RouteNames.AddScreen);
  };

  const alertDelete = index => {
    Alert.alert('Delete Movie?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(deleteMovie());
        },
      },
    ]);
  };

  return (
    <View style={styles.containerBlock}>
      <ScrollView>
        {movie.map(value => (
          <View style={styles.movieBlock}>
            <Text style={styles.blockName}>{localization.movie.TitleName}</Text>
            <Text style={styles.blockNameBox}>{value.Title}</Text>
            <View style={styles.movieCentralBlock}>
              <View style={styles.centralBlockGroup}>
                <Text style={styles.blockName}>{localization.movie.Year}</Text>
                <Text style={styles.centralBlockTextBox}>{value.Stars}</Text>
              </View>
              <View>
                <Text style={styles.blockName}>{localization.movie.Year}</Text>
                <Text style={styles.centralBlockTextBox}>{value.Year}</Text>
              </View>
              <View>
                <Text style={styles.blockName}>
                  {localization.movie.Format}
                </Text>
                <Text style={styles.centralBlockTextBox}>{value.Format}</Text>
              </View>
            </View>
            <Text style={styles.blockName}>{localization.movie.About}</Text>
            <Text style={styles.blockAboutMovie}>{value.aboutFilm}</Text>
            <View style={styles.movieCentralBlock}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => alertDelete(value)}>
                <Text style={styles.deleteText}>
                  {localization.movie.Delete}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      {movie.length > 0 ? (
        <View style={styles.movieCentralBlock}>
          <TouchableOpacity style={styles.addButton} onPress={onPressAdd}>
            <Text style={styles.addText}>{localization.actions.Add}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => dispatch(sortMovie())}>
            <Text style={styles.addText}>{localization.movie.Sort}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.addButton} onPress={onPressAdd}>
          <Text style={styles.addText}>{localization.actions.Add}</Text>
        </TouchableOpacity>
      )}
      <Logout />
    </View>
  );
}

export default HomeScreenBlock;
