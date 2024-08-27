import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Modal, FlatList, StyleSheet, Alert } from 'react-native';
import CustomButton from '../components/CustomButton'; // Verifique se o caminho está correto
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC0CySqROthO8EU74xZ-wxZ9TjGg-N1QJw",
  authDomain: "usuario-4f214.firebaseapp.com",
  projectId: "usuario-4f214",
  storageBucket: "usuario-4f214.appspot.com",
  messagingSenderId: "278425769011",
  appId: "1:278425769011:web:b81dc5b3896d98d1cebf46",
  measurementId: "G-WXQBXKXKF5"
};

// Inicializa o Firebase apenas uma vez
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtém a instância de autenticação

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Qualquer inicialização adicional, se necessário
  }, []);

  const addItem = () => {
    if (inputText) {
      setItems([...items, { id: items.length.toString(), value: inputText }]);
      setInputText('');
    }
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert('Usuário criado com sucesso!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Este e-mail já está em uso!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('E-mail inválido!');
        } else {
          Alert.alert('Erro ao criar usuário!', error.message);
        }
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert('Login realizado com sucesso!');
      })
      .catch(error => {
        Alert.alert('Erro ao fazer login!', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabalho react natives</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton text="Registrar" color="#4CAF50" onPress={handleSignUp} />
      <CustomButton text="Login" color="#2196F3" onPress={handleLogin} />

      <CustomButton
        text="Sobre o programador"
        color="#FF5722"
        onPress={() => setModalVisible(true)}
      />

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Meu nome é Alexandro e programei esse React Native. Tenho 18 anos e meu sonho é o sucesso!
          </Text>
          <CustomButton
            text="Fechar"
            color="#2196F3"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});
