import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {addMovie} from '../Redux/CounterSlice';
import localization from '../../Assets/localization.json';
function SearchFilter({data, input}) {
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={index => `${index}`}
        renderItem={({item}) => {
          if (item.Title.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={styles.movieBlock}>
                <Text style={styles.blockName}>
                  {localization.movie.TitleName}
                </Text>
                <Text style={styles.blockNameBox}> {item.Title}</Text>
                <View style={styles.movieCentralBlock}>
                  <View style={styles.centralBlockGroup}>
                    <Text style={styles.blockName}>
                      {localization.movie.Stars}
                    </Text>
                    <Text style={styles.centralBlockTextBox}>{item.Stars}</Text>
                  </View>
                  <View>
                    <Text style={styles.blockName}>
                      {localization.movie.Year}
                    </Text>
                    <Text style={styles.centralBlockTextBox}> {item.Year}</Text>
                  </View>
                  <View>
                    <Text style={styles.blockName}>
                      {localization.movie.Format}
                    </Text>
                    <Text style={styles.centralBlockTextBox}>
                      {item.Format}
                    </Text>
                  </View>
                </View>
                <Text style={styles.blockName}>{localization.movie.About}</Text>
                <View style={styles.blockAboutMovie}>
                  <TextInput
                    value={item.aboutFilm}
                    placeholderTextColor={'black'}
                    onChange={text => text}
                    placeholder={'Your think ...'}
                    style={styles.centralBlockTextBox}
                  />
                </View>
                <View style={styles.movieCentralBlock}>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => dispatch(addMovie(item))}
                    props={item}>
                    <Text style={styles.deleteText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
        }}
      />
    </View>
  );
}

export default SearchFilter;
