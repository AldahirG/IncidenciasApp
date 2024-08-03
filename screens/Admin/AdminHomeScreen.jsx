// screens/Admin/AdminHomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AdminHomeScreen = ({ navigation }) => {
  // Datos simulados
  const totalIncidents = 50;
  const totalUsers = 120;
  const weeklyActivity = 58; // Porcentaje
  const totalProgress = 55; // Porcentaje

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Buenos días, Admin!</Text>
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
          <Text style={styles.cardTitle}>Usuarios</Text>
          <Text style={styles.cardNumber}>{totalUsers}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actividad semanal</Text>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{weeklyActivity}%</Text>
          <Text style={styles.statLabel}>Actividad semanal</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalProgress}%</Text>
          <Text style={styles.statLabel}>Progreso total</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Incidencias reportadas</Text>
      <View style={styles.incidentList}>
        {/* Aquí puedes mapear las incidencias */}
        <View style={styles.incidentCard}>
          <Text style={styles.incidentTitle}>Incidencia en el aula 101</Text>
          <Text style={styles.incidentStatus}>Estado: Pendiente</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={[styles.button, styles.approveButton]}>
              <Text style={styles.buttonText}>Aprobar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.discardButton]}>
              <Text style={styles.buttonText}>Descartar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.detailsButton]}>
              <Text style={styles.buttonText}>Detalles</Text>
            </TouchableOpacity>
          </View>
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
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    width: '48%',
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
  approveButton: {
    backgroundColor: '#28a745', // Color para el botón de aprobar
  },
  discardButton: {
    backgroundColor: '#dc3545', // Color para el botón de descartar
  },
  detailsButton: {
    backgroundColor: '#007bff', // Color para el botón de detalles
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default AdminHomeScreen;
