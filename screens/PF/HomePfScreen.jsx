// screens/PF/HomePfScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomePfScreen = ({ navigation }) => {
  // Datos simulados
  const totalIncidents = 30;
  const totalNewIncidents = 5;
  const incidentHistory = 25; // Total de incidencias históricas
  const weeklyActivity = 70; // Porcentaje

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Buenos días, Planta Física!</Text>
          <Text style={styles.subtitle}>Aquí está el resumen de hoy.</Text>
        </View>
        <Image
          source={{ uri: 'https://your-avatar-url.com/avatar.png' }} // URL del avatar
          style={styles.avatar}
        />
      </View>

      <View style={styles.dashboard}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Incidencias</Text>
          <Text style={styles.cardNumber}>{totalIncidents}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Nuevas Incidencias</Text>
          <Text style={styles.cardNumber}>{totalNewIncidents}</Text>
        </View>
       
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actividad semanal</Text>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{weeklyActivity}%</Text>
          <Text style={styles.statLabel}>Actividad semanal</Text>
        </View>
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
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    width: '48%',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  section: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 5,
  },
  incidentList: {
    marginTop: 20,
  },
  incidentCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  incidentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  incidentStatus: {
    fontSize: 14,
    color: '#6c757d',
    marginVertical: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  detailsButton: {
    backgroundColor: '#007bff', // Color para el botón de detalles
  },
  processButton: {
    backgroundColor: '#28a745', // Color para el botón de procesar
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomePfScreen;
