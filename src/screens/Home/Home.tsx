import React from "react";
import {View,Text, Dimensions, TouchableOpacity,StyleSheet,Image, FlatList} from 'react-native'
import { moviedata } from "../data/moviesData";
import {useNavigation,NavigationProp} from "@react-navigation/native"
const { width } = Dimensions.get('window')
const cardWidth = (width -40) / 2

type RootStackParamList ={
  Watch_list: {movie:any}
}

export default function HomeScreen(){
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const renderMovie=({item}:any)=>(
<TouchableOpacity style={styles.card}
onPress={() => navigation.navigate('Watch_list', { movie: item })}
>
  <Image source={{uri: item.poster}} style={styles.image}/>
  <View style={styles.info}>
    <Text style={styles.title} numberOfLines={1} >{item.title}</Text>
    <Text style={styles.subTitle}>{item.genre} • {item.runTime}mn</Text>
    <View style={styles.ratingBadge}>
      <Text style={styles.ratingText}>{item.rating}</Text>
    </View>
  </View>
</TouchableOpacity>
  )
  return(
    <View style={styles.container}>
      <Text style={styles.header}>កំពុងបញ្ចាំង</Text>
      <FlatList
      data={moviedata}
      renderItem={renderMovie}
      keyExtractor={(item)=>item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // ផ្ទៃខាងក្រោយខ្មៅងងឹត
    paddingTop: 50,
  },
  header: {
    fontSize: 26,
    color: '#ff0000', // ពណ៌ក្រហមដូច Logo Legend
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    width: cardWidth,
    backgroundColor: '#1a1a1a',
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    // បន្ថែម Shadow សម្រាប់ iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // បន្ថែម Elevation សម្រាប់ Android
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 240, // កម្ពស់ Poster
    resizeMode: 'cover',
  },
  info: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subTitle: {
    color: '#aaa',
    fontSize: 12,
  },
  ratingBadge: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ffcc00',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  ratingText: {
    color: '#ffcc00',
    fontSize: 10,
    fontWeight: 'bold',
  }
});