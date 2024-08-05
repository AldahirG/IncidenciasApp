// screens/User/HomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Buenos días, Usuario!</Text>
          <Text style={styles.subtitle}>Aquí está el resumen de hoy.</Text>
        </View>
        <Image
          source={{ uri: 'https://your-avatar-url.com/avatar.png' }} // URL del avatar
          style={styles.avatar}
        />
      </View>

      <TouchableOpacity 
        style={styles.createButton} 
        onPress={() => navigation.navigate('NewIncident')}
      >
        <Text style={styles.createButtonText}>+ Reportar nueva incidencia</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Resumen de incidencias</Text>
      <View style={styles.tasksOverview}>
        <View style={[styles.taskCard, styles.blueBackground]}>
          <Text style={styles.taskCount}>5</Text>
          <Text style={styles.taskLabel}>Incidencias reportadas</Text>
        </View>
        <View style={[styles.taskCard, styles.greenBackground]}>
          <Text style={styles.taskCount}>3</Text>
          <Text style={styles.taskLabel}>Incidencias en proceso</Text>
        </View>
        <View style={[styles.taskCard, styles.purpleBackground]}>
          <Text style={styles.taskCount}>2</Text>
          <Text style={styles.taskLabel}>Incidencias resueltas</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Administrar incidencias</Text>
      <View style={styles.projectOverview}>
        <TouchableOpacity 
          style={styles.projectCard} 
          onPress={() => navigation.navigate('IncidentHistory')}
        >
          <Text style={styles.projectCardText}>Historial de incidencias</Text>
          <FontAwesome name="history" size={24} color="#fff" />
        </TouchableOpacity>
        {/* Añadir más tarjetas de proyecto según sea necesario */}
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
  createButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  tasksOverview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  taskCard: {
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
  },
  blueBackground: {
    backgroundColor: '#0b60e1',
  },
  purpleBackground: {
    backgroundColor: '#763cad',
  },
  greenBackground: {
    backgroundColor: '#28a745',
  },
  taskCount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  taskLabel: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
  projectOverview: {
    marginTop: 20,
  },
  projectCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0b60e1',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  projectCardText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
