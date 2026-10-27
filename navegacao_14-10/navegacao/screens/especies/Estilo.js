import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F7F5EF',
	},
	conteudo: {
		paddingHorizontal: 20,
		paddingTop: 28,
		paddingBottom: 30,
	},
	marca: {
		color: '#B65F43',
		fontSize: 10,
		fontWeight: '800',
	},
	titulo: {
		marginTop: 10,
		color: '#263D35',
		fontSize: 32,
		lineHeight: 37,
		fontWeight: '800',
	},
	subtitulo: {
		marginTop: 9,
		marginBottom: 22,
		color: '#666B61',
		fontSize: 14,
		lineHeight: 21,
	},
	cartao: {
		flexDirection: 'row',
		minHeight: 142,
		marginBottom: 13,
		overflow: 'hidden',
		borderRadius: 12,
		backgroundColor: '#FFFEFA',
	},
	imagem: {
		width: 112,
		minHeight: 142,
		backgroundColor: '#DED8C9',
	},
	textosCartao: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 14,
		paddingVertical: 13,
	},
	indice: {
		color: '#B65F43',
		fontSize: 9,
		fontWeight: '800',
	},
	nome: {
		marginTop: 6,
		color: '#263D35',
		fontSize: 18,
		fontWeight: '800',
	},
	descricao: {
		marginTop: 5,
		color: '#666B61',
		fontSize: 12,
		lineHeight: 17,
	},
	nota: {
		padding: 16,
		marginTop: 5,
		borderLeftWidth: 3,
		borderLeftColor: '#D56D4D',
		color: '#526057',
		fontSize: 13,
		lineHeight: 20,
	},
});

export default styles;
