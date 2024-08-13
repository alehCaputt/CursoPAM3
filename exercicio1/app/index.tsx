import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <view>
    <header style={styles.header}>Este é um trabalho feito pelo react native, espero que gostem</header>
    </view>
    <View>
      <Text style={styles.title}>
        Este é o primeiro botao teste
      </Text>
      <Button
        title="clique aqui"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Vou dar uma repaginada 
      </Text>
      <Button
        title="Me toque"
        color="#f194"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />

    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 100,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 18,
    borderBottomColor: '#7373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    textAlign: 'center',
    flex: 2
  }
 
});

export default App
