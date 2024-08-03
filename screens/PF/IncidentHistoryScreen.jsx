// screens/PF/IncidentHistoryScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const IncidentHistoryScreen = ({ navigation }) => {
  // Simulación de datos de incidencias históricas
  const [incidentHistory, setIncidentHistory] = useState([
    {
      id: '1', 
      title: 'Incidencia en el aula 101', 
      date: '2023-07-28',
      description: 'La ventana estaba rota.',
      status: 'Completado'
    },
    {
      id: '2', 
      title: 'Problema eléctrico en el aula 202', 
      date: '2023-07-29',
      description: 'Las luces no funcionaban.',
      status: 'Completado'
    },
    // Más datos de ejemplo
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={incidentHistory}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.incidentCard}>
            <Text style={styles.incidentTitle}>{item.title}</Text>
            <Text style={styles.incidentStatus}>Estado: {item.status}</Text>
            <Text style={styles.incidentDate}>Fecha: {item.date}</Text>
            <Text style={styles.incidentDescription}>Descripción: {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
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
  incidentDate: {
    fontSize: 14,
    color: '#6c757d',
  },
  incidentDescription: {
    fontSize: 14,
    color: '#6c757d',
    marginVertical: 5,
  },
});

export default IncidentHistoryScreen;
