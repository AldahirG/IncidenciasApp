// screens/Admin/AdminHomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AdminHomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning Alex!</Text>
          <Text style={styles.subtitle}>4 Devices are connected</Text>
        </View>
        <Image
          source={{ uri: 'https://your-avatar-url.com/avatar.png' }} // URL del avatar
          style={styles.avatar}
        />
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={[styles.card, styles.cardRed]} onPress={() => navigation.navigate('IncidentHistory')}>
          <View style={styles.cardContent}>
            <FontAwesome name="history" size={24} color="#fff" />
            <Text style={styles.cardTitle}>Historial de incidencias</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, styles.cardGreen]} onPress={() => navigation.navigate('NewIncident')}>
          <View style={styles.cardContent}>
            <FontAwesome name="plus" size={24} color="#fff" />
            <Text style={styles.cardTitle}>Nuevas incidencias</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.cardBlue]} onPress={() => navigation.navigate('Users')}>
          <View style={styles.cardContent}>
            <FontAwesome name="users" size={24} color="#fff" />
            <Text style={styles.cardTitle}>Usuarios</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#6c757d',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardsContainer: {
    marginTop: 30,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardRed: {
    backgroundColor: '#ff6b6b',
  },
  cardGreen: {
    backgroundColor: '#1dd1a1',
  },
  cardBlue: {
    backgroundColor: '#54a0ff',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
  },
});

export default AdminHomeScreen;
