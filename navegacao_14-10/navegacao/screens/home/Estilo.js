import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5EF',
  },
  conteudo: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 32,
  },
  marca: {
    color: '#B65F43',
    fontSize: 11,
    fontWeight: '800',
  },
  saudacao: {
    marginTop: 11,
    color: '#263D35',
    fontSize: 38,
    lineHeight: 42,
    fontWeight: '800',
  },
  subtitulo: {
    maxWidth: 360,
    marginTop: 12,
    marginBottom: 20,
    color: '#666B61',
    fontSize: 15,
    lineHeight: 23,
  },
  imagem: {
    width: '100%',
    height: 230,
    borderRadius: 18,
    backgroundColor: '#DED8C9',
  },
  seloImagem: {
    alignSelf: 'flex-start',
    marginTop: -17,
    marginLeft: 14,
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 4,
    backgroundColor: '#D56D4D',
  },
  seloTexto: {
    color: '#FFFEFA',
    fontSize: 9,
    fontWeight: '800',
  },
  blocoTexto: {
    marginTop: 25,
  },
  tituloBloco: {
    color: '#263D35',
    fontSize: 23,
    lineHeight: 28,
    fontWeight: '700',
  },
  paragrafo: {
    marginTop: 11,
    color: '#666B61',
    fontSize: 14,
    lineHeight: 22,
  },
  destaque: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    padding: 17,
    borderRadius: 12,
    backgroundColor: '#E9EEE6',
  },
  destaqueNumero: {
    color: '#B65F43',
    fontSize: 32,
    fontWeight: '800',
  },
  destaqueTextoWrap: {
    flex: 1,
    marginLeft: 16,
  },
  destaqueTitulo: {
    color: '#263D35',
    fontSize: 14,
    fontWeight: '700',
  },
  destaqueTexto: {
    marginTop: 3,
    color: '#666B61',
    fontSize: 12,
  },
});

export default styles;