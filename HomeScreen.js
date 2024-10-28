import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#42a5f5' }}>
      <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold' }}>Bem-vindo(a)!</Text>
      <Text style={{ fontSize: 20, color: 'black', marginTop: 10 }}>ao FOCUS TIME</Text>

      <Text style={{ fontSize: 16, color: '#fff', textAlign: 'center', marginTop: 20 }}>
        Otimize seu tempo e alcance novos níveis de produtividade com a técnica Pomodoro! Nosso aplicativo foi projetado para ajudar você a gerenciar tarefas, focar em blocos de tempo eficientes e acompanhar seu progresso ao longo do dia.
      </Text>

      <Button
        title="Vamos Começar"
        color="#000"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default HomeScreen;
