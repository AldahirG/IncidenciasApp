// screens/Auth/LoginScreen.jsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const { login } = useContext(AuthContext);

  const handleInputChange = (field, value) => {
    if (field === 'email') setEmail(value);
    if (field === 'password') setPassword(value);

    setIsButtonEnabled(email && password);
  };

  const handleLogin = () => {
    // Simulación de lógica de autenticación
    let userType = 'user'; // Valor por defecto
    if (email === 'admin@example.com') {
      userType = 'admin';
    } else if (email === 'pf@example.com') {
      userType = 'pf';
    }

    // Llamar a la función de login del contexto de autenticación
    login(userType);

    // Navegar a la pantalla adecuada basada en el tipo de usuario
    if (userType === 'admin') {
      navigation.navigate('AdminHome');
    } else if (userType === 'pf') {
      navigation.navigate('HomePF');
    } else {
      navigation.navigate('Home');
    }

    // Limpiar el formulario
    setEmail('');
    setPassword('');
    setIsButtonEnabled(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>INICIO DE SESIÓN</Text>
        <Text style={styles.subtitle}>Work without limits</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Correo:</Text>
        <TextInput
          style={styles.input}
          placeholder="correo@ejemplo.com"
          value={email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="contraseña"
          value={password}
          onChangeText={(value) => handleInputChange('password', value)}
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.button, isButtonEnabled && styles.buttonEnabled]}
          onPress={handleLogin}
          disabled={!isButtonEnabled}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>o</Text>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <FontAwesome name="google" size={24} color="#fff" />
          <Text style={styles.socialButtonText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
          <FontAwesome name="apple" size={24} color="#fff" />
          <Text style={styles.socialButtonText}>Iniciar sesión con Apple</Text>
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
    color: '#000',
  },
  subtitle: {
    color: '#6c757d',
    marginTop: 5,
    fontSize: 14,
  },
  form: {
    flex: 1,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    marginTop: 20,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#ccc', // Default disabled color
  },
  buttonEnabled: {
    backgroundColor: '#28a745', // Enabled color
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#6c757d',
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  googleButton: {
    backgroundColor: '#4285f4',
  },
  appleButton: {
    backgroundColor: '#000',
  },
  socialButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
