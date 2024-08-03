// screens/PF/IncidentProcessScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image, Modal, Button } from 'react-native';

const IncidentProcessScreen = ({ navigation }) => {
  // Simulación de datos de incidencias
  const [incidents, setIncidents] = useState([
    {
      id: '1', 
      title: 'Incidencia en el aula 101', 
      date: '2023-07-28',
      description: 'La ventana está rota.',
      photo: 'https://picsum.photos/200/300/?blur', // URL de ejemplo
      status: 'Pendiente',
      comments: ['Comentario 1', 'Comentario 2']
    },
    {
      id: '2', 
      title: 'Problema eléctrico en el aula 202', 
      date: '2023-07-29',
      description: 'Las luces no funcionan.',
      photo: 'https://picsum.photos/200/300/?blur', // URL de ejemplo
      status: 'Pendiente',
      comments: ['Comentario 1', 'Comentario 2']
    },
    // Más datos de ejemplo
  ]);

  const [selectedIncident, setSelectedIncident] = useState(null);
  const [comment, setComment] = useState('');

  const handleUpdateStatus = (id, newStatus) => {
    setIncidents(incidents.map(incident => 
      incident.id === id ? { ...incident, status: newStatus } : incident
    ));
    setSelectedIncident(null);
  };

  const handleAddComment = () => {
    setIncidents(incidents.map(incident => 
      incident.id === selectedIncident.id ? { ...incident, comments: [...incident.comments, comment] } : incident
    ));
    setComment('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={incidents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.incidentCard} onPress={() => setSelectedIncident(item)}>
            <Text style={styles.incidentTitle}>{item.title}</Text>
            <Text style={styles.incidentStatus}>Estado: {item.status}</Text>
          </TouchableOpacity>
        )}
      />

      {selectedIncident && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={selectedIncident !== null}
          onRequestClose={() => setSelectedIncident(null)}
        >
          <View style={styles.modalView}>
            <Text style={styles.incidentTitle}>{selectedIncident.title}</Text>
            <Text style={styles.incidentStatus}>Estado: {selectedIncident.status}</Text>
            <Text style={styles.incidentDate}>Fecha: {selectedIncident.date}</Text>
            <Text style={styles.incidentDescription}>Descripción: {selectedIncident.description}</Text>
            {selectedIncident.photo && (
              <Image 
                source={{ uri: selectedIncident.photo }}
                style={styles.incidentImage}
              />
            )}
            <Text style={styles.commentsTitle}>Comentarios:</Text>
            {selectedIncident.comments.map((comment, index) => (
              <Text key={index} style={styles.comment}>{comment}</Text>
            ))}
            <TextInput
              style={styles.commentInput}
              placeholder="Agregar comentario"
              value={comment}
              onChangeText={setComment}
            />
            <Button title="Agregar Comentario" onPress={handleAddComment} />
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={[styles.button, styles.processButton]}
                onPress={() => handleUpdateStatus(selectedIncident.id, 'En Proceso')}
              >
                <Text style={styles.buttonText}>En Proceso</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.completedButton]}
                onPress={() => handleUpdateStatus(selectedIncident.id, 'Completado')}
              >
                <Text style={styles.buttonText}>Completado</Text>
              </TouchableOpacity>
            </View>
            <Button title="Cerrar" onPress={() => setSelectedIncident(null)} />
          </View>
        </Modal>
      )}
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
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  incidentImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  comment: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 5,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  processButton: {
    backgroundColor: '#007bff', // Color para el botón de "En Proceso"
  },
  completedButton: {
    backgroundColor: '#28a745', // Color para el botón de "Completado"
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default IncidentProcessScreen;
