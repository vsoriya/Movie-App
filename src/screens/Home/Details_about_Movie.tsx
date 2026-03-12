import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';

export default function MovieDetail({ route }: any) {
  // ទទួលទិន្នន័យដែលបញ្ជូនមកពី HomeScreen
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container} bounces={false}>
      {/* 1. Backdrop Image (រូបភាពធំនៅខាងក្រោយ) */}
      <ImageBackground 
        source={{ uri: movie.poster }} 
        style={styles.backdrop}
        blurRadius={5} // ធ្វើឱ្យវាព្រិលៗដើម្បីមើលអក្សរច្បាស់
      >
        <View style={styles.overlay} />
      </ImageBackground>

      {/* 2. Header Section (Poster និង ឈ្មោះរឿង) */}
      <View style={styles.headerContent}>
        <Image source={{ uri: movie.poster }} style={styles.mainPoster} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.genre}>{movie.genre} • {movie.runTime}mn</Text>
          <View style={styles.ratingBox}>
             <Text style={styles.ratingText}>{movie.rating}</Text>
          </View>
        </View>
      </View>

      {/* 3. Synopsis Section (សាច់រឿងសង្ខេប) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Movie</Text>
        <Text style={styles.description}>
          {/* បើក្នុង data អត់មាន synopsis បងដាក់អក្សរគំរូសិន */}
          {movie.synopsis || "No description available for this movie yet."}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1F2123' },
  backdrop: { width: '100%', height: 300, justifyContent: 'flex-end' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
  headerContent: { 
    flexDirection: 'row', 
    paddingHorizontal: 20, 
    marginTop: -100, // រុញរូប Poster ឱ្យឡើងទៅលើជាន់ Backdrop
  },
  mainPoster: { 
    width: 140, 
    height: 210, 
    borderRadius: 12, 
    borderWidth: 2, 
    borderColor: '#fff' 
  },
  titleContainer: { 
    flex: 1, 
    marginLeft: 15, 
    justifyContent: 'flex-end', 
    paddingBottom: 10 
  },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  genre: { color: '#aaa', fontSize: 14, marginTop: 5 },
  ratingBox: { 
    marginTop: 10, 
    backgroundColor: '#ffcc00', 
    alignSelf: 'flex-start', 
    paddingHorizontal: 8, 
    borderRadius: 4 
  },
  ratingText: { color: '#000', fontWeight: 'bold', fontSize: 12 },
  section: { padding: 20 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  description: { color: '#ccc', lineHeight: 22, fontSize: 15 }
});