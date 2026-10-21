import { View, Text, Image, Button } from 'react-native';

import styles from './Estilo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Mundo dos Gatos
      </Text>

      <Text style={styles.subtitulo}>
        Tudo sobre nossos amigos felinos!
      </Text>

    </View>
  );
}