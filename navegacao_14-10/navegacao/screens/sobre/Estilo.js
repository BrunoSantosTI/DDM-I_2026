import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F7F5EF',
	},
	conteudo: {
		paddingHorizontal: 22,
		paddingTop: 30,
		paddingBottom: 34,
	},
	marca: {
		color: '#B65F43',
		fontSize: 10,
		fontWeight: '800',
	},
	titulo: {
		maxWidth: 390,
		marginTop: 12,
		marginBottom: 21,
		color: '#263D35',
		fontSize: 30,
		lineHeight: 36,
		fontWeight: '800',
	},
	imagem: {
		width: '100%',
		height: 215,
		borderRadius: 14,
		backgroundColor: '#DED8C9',
	},
	paragrafo: {
		marginTop: 19,
		color: '#62695F',
		fontSize: 14,
		lineHeight: 23,
	},
	valor: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#E4E1D7',
	},
	numero: {
		width: 40,
		color: '#B65F43',
		fontSize: 14,
		fontWeight: '800',
	},
	valorTexto: {
		flex: 1,
	},
	valorTitulo: {
		color: '#263D35',
		fontSize: 14,
		fontWeight: '700',
	},
	valorDescricao: {
		marginTop: 4,
		color: '#73776D',
		fontSize: 12,
		lineHeight: 18,
	},
	assinatura: {
		marginTop: 24,
		color: '#B65F43',
		fontSize: 15,
		fontWeight: '700',
	},
});

export default styles;
