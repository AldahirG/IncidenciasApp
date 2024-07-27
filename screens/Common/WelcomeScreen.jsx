// screens/Common/WelcomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Gestión de Incidencias</Text>
        <Text style={styles.subtitle}>A platform built for a new way of working</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    flex: 2,
    backgroundColor: '#0b0d16', // Color de fondo oscuro
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, // Ajuste para centrar verticalmente
  },
  logoContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80, // Ajusta el tamaño según sea necesario
    height: 80,
    borderRadius: 40, // Si el logo es redondo
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30, // Ajuste para centrar verticalmente
  },
  button: {
    backgroundColor: '#28a745',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
