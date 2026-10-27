import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F7F5EF',
	},
	conteudo: {
		flexGrow: 1,
		justifyContent: 'center',
		paddingHorizontal: 24,
		paddingTop: 28,
		paddingBottom: 32,
	},
	topo: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 27,
	},
	imagem: {
		width: 52,
		height: 52,
		marginRight: 13,
		borderRadius: 26,
		backgroundColor: '#DED8C9',
	},
	marca: {
		color: '#B65F43',
		fontSize: 11,
		fontWeight: '800',
	},
	titulo: {
		maxWidth: 340,
		color: '#263D35',
		fontSize: 30,
		lineHeight: 36,
		fontWeight: '800',
	},
	subtitulo: {
		marginTop: 9,
		marginBottom: 29,
		color: '#666B61',
		fontSize: 14,
		lineHeight: 21,
	},
	label: {
		marginBottom: 8,
		color: '#263D35',
		fontSize: 13,
		fontWeight: '700',
	},
	input: {
		height: 52,
		paddingHorizontal: 15,
		marginBottom: 19,
		borderWidth: 1,
		borderColor: '#DFDDD3',
		borderRadius: 8,
		backgroundColor: '#FFFEFA',
		color: '#263D35',
		fontSize: 15,
	},
	botao: {
		minHeight: 52,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 3,
		borderRadius: 8,
		backgroundColor: '#263D35',
	},
	textoBotao: {
		color: '#FFFEFA',
		fontSize: 15,
		fontWeight: '700',
	},
	aviso: {
		marginTop: 15,
		color: '#85877D',
		fontSize: 12,
		textAlign: 'center',
	},
});
export default styles;