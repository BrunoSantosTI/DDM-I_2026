import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  imagem: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B5E83',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    color: '#66545E',
    textAlign: 'center',
    marginBottom: 35,
  },

  botao: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default styles;