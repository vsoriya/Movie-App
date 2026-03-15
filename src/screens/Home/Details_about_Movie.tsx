import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  ImageBackground, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar
} from 'react-native';

export default function MovieDetail({ route, navigation }: any) {
 
  const movie = route?.params?.movie;

  if (!movie) {
    return (
      <View style={styles.centered}>
        <Text style={{color: 'white'}}>Movie not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        
        {/* 1. Backdrop Section */}
        <ImageBackground 
          source={{ uri: movie.poster }} 
          style={styles.backdrop}
          blurRadius={4}
        >
          {/* Gradient Overlay for better text readability */}
          <View style={styles.linearGradient} />
          
          {/* Back Button */}
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
        </ImageBackground>

        {/* 2. Header Content (Overlapping) */}
        <View style={styles.headerContent}>
          <View style={styles.posterShadow}>
            <Image source={{ uri: movie.poster }} style={styles.mainPoster} />
          </View>
          
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>{movie.title}</Text>
            <Text style={styles.genre}>{movie.genre} • {movie.runTime} min</Text>
            <View style={styles.ratingBox}>
               <Text style={styles.ratingText}>⭐ {movie.rating}</Text>
            </View>
          </View>
        </View>

        {/* 3. Synopsis Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Movie</Text>
          <Text style={styles.description}>
            {movie.synopsis || "No description available for this movie yet. Stay tuned for updates."}
          </Text>
          
          {/* Action Button */}
          <TouchableOpacity style={styles.watchBtn}>
            <Text style={styles.watchBtnText}>Watch Trailer</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1F2123' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1F2123' },
  
  backdrop: { width: '100%', height: 350 },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(31, 33, 35, 0.7)', // Fades the backdrop into the background color
  },
  backButton: {
    marginTop: 50,
    marginLeft: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },

  headerContent: { 
    flexDirection: 'row', 
    paddingHorizontal: 20, 
    marginTop: -80, // Overlap effect
  },
  posterShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15, // Important for Android shadows
  },
  mainPoster: { 
    width: 130, 
    height: 190, 
    borderRadius: 15, 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.2)' 
  },
  titleContainer: { 
    flex: 1, 
    marginLeft: 15, 
    justifyContent: 'flex-end', 
    paddingBottom: 5 
  },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', letterSpacing: 0.5 },
  genre: { color: '#BCBCBC', fontSize: 14, marginTop: 5 },
  ratingBox: { 
    marginTop: 10, 
    backgroundColor: '#FFD700', 
    alignSelf: 'flex-start', 
    paddingHorizontal: 10, 
    paddingVertical: 3,
    borderRadius: 6 
  },
  ratingText: { color: '#000', fontWeight: 'bold', fontSize: 13 },

  section: { padding: 25 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  description: { color: '#A0A0A0', lineHeight: 24, fontSize: 15 },
  
  watchBtn: {
    backgroundColor: '#E50914',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30
  },
  watchBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});