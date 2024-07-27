// screens/Auth/SignupScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implementa la lógica de registro aquí
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Leafboard</Text>
        <Text style={styles.subtitle}>Work without limits</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Your email address</Text>
        <TextInput
          style={styles.input}
          placeholder="dilleragip@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Choose a password</Text>
        <TextInput
          style={styles.input}
          placeholder="min. 8 characters"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#DB4437' }]}>
          <FontAwesome name="google" size={24} color="#fff" />
          <Text style={styles.socialButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#000' }]}>
          <FontAwesome name="apple" size={24} color="#fff" />
          <Text style={styles.socialButtonText}>Sign up with Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#6c757d',
    marginTop: 5,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#28a745',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#6c757d',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  socialButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default SignupScreen;
