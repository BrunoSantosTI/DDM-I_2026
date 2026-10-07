import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scScroll}>

        <Text>Open up App.js to start working on your app!</Text>
        <TextInput placeholder="teste"></TextInput>
        <Button onPress='' title='botão'></Button>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scScroll:{
    flex: 1,
  },
  
  container: {
    flex: 1,
    backgroundColor: '#ec9898',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
