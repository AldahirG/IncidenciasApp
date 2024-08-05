// screens/Admin/IncidentHistoryScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Modal, TextInput } from 'react-native';

const NewIncident = ({ navigation }) => {
  // Simulación de datos de incidencias
  const [incidents, setIncidents] = useState([
    {
      id: '1', 
      title: 'Incidencia en el aula 101', 
      date: '2023-07-28',
      description: 'La ventana está rota.',
      photo: 'https://picsum.photos/200/300/?blur', // URL de ejemplo
      status: 'Pendiente'
    },
    {
      id: '2', 
      title: 'Problema eléctrico en el aula 202', 
      date: '2023-07-29',
      description: 'Las luces no funcionan.',
      photo: 'https://picsum.photos/200/300/?blur', // URL de ejemplo
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
              <TouchableOpacity
                style={[styles.button, styles.approveButton]}
                onPress={() => handleApprove(item.id)}
              >
                <Text style={styles.buttonText}>Aprobar</Text>
              </TouchableOpacity> 
              <TouchableOpacity
                style={[styles.button, styles.discardButton]}
                onPress={() => handleDiscard(item.id)}
              >
                <Text style={styles.buttonText}>Descartar</Text>
              </TouchableOpacity> 
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
            <View style={styles.modalView}>
              <Image 
                source={{ uri: selectedIncident.photo }}
                style={styles.modalImage}
              />
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selectedIncident.title}</Text>
                <Text style={styles.modalDate}>Fecha: {selectedIncident.date}</Text>
                <Text style={styles.modalDescription}>Descripción: {selectedIncident.description}</Text>
                <Text style={styles.modalStatus}>Estado: {selectedIncident.status}</Text>
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={[styles.button, styles.closeButton]} onPress={closeModal}>
                  <Text style={styles.buttonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalContent: {
    width: '100%',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDate: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 5,
  },
  modalDescription: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 5,
  },
  modalStatus: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#dc3545',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default NewIncident;
