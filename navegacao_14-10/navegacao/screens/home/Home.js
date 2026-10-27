import { View, Text, Image, ScrollView } from 'react-native';

import styles from './Estilo';

export default function Home() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Text style={styles.marca}>CLUBE FELINO</Text>
      <Text style={styles.saudacao}>Um mundo{ '\n' }de bigodes.</Text>
      <Text style={styles.subtitulo}>
        Curiosidades, cuidado e muito carinho por quem transforma qualquer canto em casa.
      </Text>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85' }}
        style={styles.imagem}
        accessibilityLabel="Gato deitado olhando para a câmera"
      />

      <View style={styles.seloImagem}>
        <Text style={styles.seloTexto}>COMPANHEIROS POR NATUREZA</Text>
      </View>

      <View style={styles.blocoTexto}>
        <Text style={styles.tituloBloco}>Pequenos no tamanho.{ '\n' }Gigantes na personalidade.</Text>
        <Text style={styles.paragrafo}>
          Gatos são curiosos, independentes e cheios de afeto à sua maneira. Há milhares de anos, eles dividem a vida com pessoas e seguem conquistando espaço com seus ronrons, brincadeiras e jeitos únicos.
        </Text>
      </View>

      <View style={styles.destaque}>
        <Text style={styles.destaqueNumero}>15h</Text>
        <View style={styles.destaqueTextoWrap}>
          <Text style={styles.destaqueTitulo}>de descanso, em média</Text>
          <Text style={styles.destaqueTexto}>Dormir bastante faz parte da rotina felina.</Text>
        </View>
      </View>
    </ScrollView>
  );
}