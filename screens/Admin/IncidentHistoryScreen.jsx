import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Modal, ActivityIndicator } from 'react-native';
import axios from 'axios';

const IncidentHistoryScreen = ({ navigation }) => {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get('https://a1k1mdqq9d.execute-api.us-east-1.amazonaws.com/prod/get_all');
        setIncidents(response.data);
      } catch (err) {
        setError('Error fetching incidents');
      } finally {
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  const handleDetails = (incident) => {
    setSelectedIncident(incident);
  };

  const closeModal = () => {
    setSelectedIncident(null);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Cargando incidencias...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#000',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default IncidentHistoryScreen;
