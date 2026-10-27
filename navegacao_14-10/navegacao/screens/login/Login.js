import { View, Text, TextInput, Pressable, Image, ScrollView } from 'react-native';

import styles from './Estilo';

export default function Login({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <View style={styles.topo}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=80' }}
          style={styles.imagem}
          accessibilityLabel="Gato sentado"
        />
        <Text style={styles.marca}>CLUBE FELINO</Text>
      </View>

      <Text style={styles.titulo}>Que bom ter você por aqui.</Text>
      <Text style={styles.subtitulo}>Entre para acompanhar suas leituras e novidades felinas.</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="voce@exemplo.com"
        placeholderTextColor="#999B91"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="Sua senha"
        placeholderTextColor="#999B91"
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.botao} onPress={() => navigation.replace('Home')}>
        <Text style={styles.textoBotao}>Entrar no clube</Text>
      </Pressable>
      <Text style={styles.aviso}>Esta demonstração não armazena seus dados.</Text>
    </ScrollView>
  );
}