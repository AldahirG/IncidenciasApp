// screens/Admin/AdminHomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AdminHomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Buenos días, Admin!</Text>
          <Text style={styles.subtitle}>Here’s what’s happening today.</Text>
        </View>
        <Image
          source={{ uri: 'https://your-avatar-url.com/avatar.png' }} // URL del avatar
          style={styles.avatar}
        />
      </View>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>+ Create new task</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Tasks overview</Text>
      <View style={styles.tasksOverview}>
        <View style={[styles.taskCard, styles.blueBackground]}>
          <Text style={styles.taskCount}>153</Text>
          <Text style={styles.taskLabel}>Permanent tasks</Text>
        </View>
        <View style={[styles.taskCard, styles.purpleBackground]}>
          <Text style={styles.taskCount}>23</Text>
          <Text style={styles.taskLabel}>Unfulfilled tasks</Text>
        </View>
        <View style={[styles.taskCard, styles.greenBackground]}>
          <Text style={styles.taskCount}>56</Text>
          <Text style={styles.taskLabel}>Team tasks</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Manage your projects</Text>
      <View style={styles.projectOverview}>
        <TouchableOpacity style={styles.projectCard}>
          <Text style={styles.projectCardText}>Calls with Teammates</Text>
          <FontAwesome name="phone" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.projectCard}>
          <Text style={styles.projectCardText}>Project Documents</Text>
          <FontAwesome name="file" size={24} color="#fff" />
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

export default AdminHomeScreen;
