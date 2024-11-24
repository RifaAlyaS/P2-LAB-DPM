import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.textCenter}>Ini Tugas 2</Text>

      {/* Kontainer untuk dua kotak */}
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Mengatur elemen secara horizontal
    justifyContent: 'space-between', // Jarak merata di antara kedua kotak
    width: '80%', // Area lebar dua kotak
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'black', // Warna bebas untuk kotak 1
    borderRadius: 10, // Sudut beradius 10
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'red', // Warna bebas untuk kotak 2
    borderRadius: 10, // Sudut beradius 10
  },
});

export default FlexBoxLayout;
