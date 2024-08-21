import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { getAllIncidents } from '../../services/incidentService';

const AdminHomeScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const [incidents, setIncidents] = useState([]);
  const [totalUsers, setTotalUsers] = useState(120); // Assuming you get this number from somewhere else
  const [weeklyActivity, setWeeklyActivity] = useState(58); // Assuming a constant value or calculate
  const [totalProgress, setTotalProgress] = useState(55); // Assuming a constant value or calculate

  useEffect(() => {
    // Fetch all incidents when the component mounts
    getAllIncidents()
      .then(response => {
        setIncidents(response.data);
      })
      .catch(error => {
        console.error('Error fetching incidents:', error);
      });
  }, []);

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
        <TouchableOpacity onPress={logout}>
          <FontAwesome name="sign-out" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.dashboard}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Incidencias</Text>
          <Text style={styles.cardNumber}>{incidents.length}</Text>
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
        {incidents.map(incident => (
          <View key={incident.incidentId.S} style={styles.incidentCard}>
            <Text style={styles.incidentTitle}>{incident.Description.S}</Text>
            <Text style={styles.incidentStatus}>Estado: {incident.Status.S}</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={[styles.button, styles.approveButton]}
                onPress={() => console.log('Aprobar', incident.incidentId.S)}
              >
                <Text style={styles.buttonText}>Aprobar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.discardButton]}
                onPress={() => console.log('Descartar', incident.incidentId.S)}
              >
                <Text style={styles.buttonText}>Descartar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.detailsButton]}
                onPress={() => console.log('Detalles', incident.incidentId.S)}
              >
                <Text style={styles.buttonText}>Detalles</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
    marginBottom: 20,
  },
  incidentCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
    marginTop: 10,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  approveButton: {
    backgroundColor: '#28a745',
  },
  discardButton: {
    backgroundColor: '#dc3545',
  },
  detailsButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default AdminHomeScreen;
