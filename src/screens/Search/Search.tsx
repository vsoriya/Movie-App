import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import ViewBackgroundColor from "../../components/View_component";
import Textinput_components from "../../components/Textinput_components";
import { moviedata } from '../data/moviesData';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


interface Movie {
  id: string;
  title: string;
  genre: string;
  runTime: number;
  poster: string;
  rating: string;
 
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = moviedata.filter((item) => {
    const itemData = item.title.toLowerCase();
    const genreData = item.genre.toLowerCase();
    const textData = searchQuery.toLowerCase();
    return itemData.includes(textData) || genreData.includes(textData);
  });

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.poster }} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieGenre}>{item.genre} • {item.runTime} min</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ViewBackgroundColor>
      <View style={styles.container}>
        <Text style={styles.title1}>Search</Text>
      </View>

      <View style={styles.inputGroup}>
        <Textinput_components 
          label="" 
          placeholder="Search movie or genre..." 
          value={searchQuery}
          onChangeText={(text: string) => setSearchQuery(text)}
        />
      </View>

      <View style={styles.listWrapper}>
        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item.id}
          renderItem={renderMovieItem}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>NO Here</Text>
                <MaterialIcons name="search-off" size={24} color="white" />
                <Text style={styles.emptyText}> 
                    We are sorry, Here are no results for "{searchQuery}"</Text>
            </View>
          }
        />
      </View>
    </ViewBackgroundColor>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    color: 'white',
  },
  inputGroup: {
    marginTop: 30,
    marginHorizontal: 10,
  },
  listWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  poster: {
    width: 90,
    height: 130,
  },
  info: {
    padding: 12,
    justifyContent: 'center',
    flex: 1,
  },
  movieTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieGenre: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#e50914',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  emptyContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  emptyText: {
    margin :5,
    color: 'gray',
    textAlign: 'center',
  }
});