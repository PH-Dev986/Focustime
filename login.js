import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    // Redireciona para a tela Timer automaticamente após carregar o componente
    const redirectToTimer = () => {
      navigation.navigate('timer');
    };

    // Define um timeout para redirecionar automaticamente após um pequeno atraso
    const timer = setTimeout(redirectToTimer, 3000);

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deseja fazer login?</Text>
      <Text style={styles.subtitle}>COMO DESEJA?</Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login com conta Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login com conta App</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Email ou Telefone</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('timer')}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.skipText}>Pular esta etapa</Text>
      </TouchableOpacity>
      
      <Image source={require('./assets/logo.png')} style={styles.logo}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42a5f5',
    paddingTop: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  skipText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  logo: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
  },
});

export default LoginScreen;
