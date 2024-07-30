// screens/Admin/IncidentHistoryScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const IncidentHistoryScreen = ({ navigation }) => {
  // Simulación de datos de incidencias
  const [incidents, setIncidents] = useState([
    {
      id: '1', 
      title: 'Incidencia en el aula 101', 
      date: '2023-07-28',
      description: 'La ventana está rota.',
      photo: 'https://example.com/photo1.jpg', // URL de ejemplo
      status: 'Pendiente'
    },
    {
      id: '2', 
      title: 'Problema eléctrico en el aula 202', 
      date: '2023-07-29',
      description: 'Las luces no funcionan.',
      photo: 'https://example.com/photo2.jpg', // URL de ejemplo
      status: 'Pendiente'
    },
    // Más datos de ejemplo
  ]);

  const [selectedIncident, setSelectedIncident] = useState(null);

  const handleApprove = (id) => {
    setIncidents(incidents.map(incident => 
      incident.id === id ? { ...incident, status: 'Aprobada' } : incident
    ));
  };

  const handleDiscard = (id) => {
    setIncidents(incidents.map(incident => 
      incident.id === id ? { ...incident, status: 'Descartada' } : incident
    ));
  };

  const handleDetails = (incident) => {
    setSelectedIncident(incident);
  };

  const closeModal = () => {
    setSelectedIncident(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Buenos días, Admin!</Text>
          <Text style={styles.subtitle}>Aquí están las incidencias de hoy.</Text>
        </View>
        <Image
          source={{ uri: 'https://your-avatar-url.com/avatar.png' }} // URL del avatar
          style={styles.avatar}
        />
      </View>

      <Text style={styles.sectionTitle}>Incidencias reportadas</Text>
      <FlatList
        data={incidents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.incidentCard}>
            <Text style={styles.incidentTitle}>{item.title}</Text>
            <Text style={styles.incidentStatus}>Estado: {item.status}</Text>
            <View style={styles.buttonGroup}>
              {/* <TouchableOpacity
                style={[styles.button, styles.approveButton]}
                onPress={() => handleApprove(item.id)}
              >
                <Text style={styles.buttonText}>Aprobar</Text>
              </TouchableOpacity> */}
              {/* <TouchableOpacity
                style={[styles.button, styles.discardButton]}
                onPress={() => handleDiscard(item.id)}
              >
                <Text style={styles.buttonText}>Descartar</Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={[styles.button, styles.detailsButton]}
                onPress={() => handleDetails(item)}
              >
                <Text style={styles.buttonText}>Detalles</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {selectedIncident && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedIncident.title}</Text>
              <Text style={styles.modalText}>Fecha: {selectedIncident.date}</Text>
              <Text style={styles.modalText}>Descripción: {selectedIncident.description}</Text>
              {selectedIncident.photo && (
                <Image 
                  source={{ uri: selectedIncident.photo }}
                  style={styles.modalImage}
                />
              )}
              <Text style={styles.modalText}>Estado: {selectedIncident.status}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default IncidentHistoryScreen;
