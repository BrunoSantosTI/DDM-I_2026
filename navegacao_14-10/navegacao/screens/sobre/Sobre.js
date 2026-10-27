import { Image, ScrollView, Text, View } from 'react-native';

import styles from './Estilo';

export default function Sobre() {
	return (
		<ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
			<Text style={styles.marca}>NOSSA HISTÓRIA</Text>
			<Text style={styles.titulo}>Feito por quem acredita que todo gato merece cuidado.</Text>

			<Image
				source={{ uri: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=85' }}
				style={styles.imagem}
				accessibilityLabel="Gato descansando tranquilamente"
			/>

			<Text style={styles.paragrafo}>
				O Clube Felino nasceu para celebrar a convivência com os gatos e compartilhar informação simples, acolhedora e responsável.
			</Text>
			<Text style={styles.paragrafo}>
				Acreditamos que entender o comportamento, respeitar o tempo de cada animal e oferecer um ambiente seguro são formas diárias de demonstrar carinho.
			</Text>

			<View style={styles.valor}>
				<Text style={styles.numero}>01</Text>
				<View style={styles.valorTexto}>
					<Text style={styles.valorTitulo}>Bem-estar em primeiro lugar</Text>
					<Text style={styles.valorDescricao}>Cuidado gentil, rotina saudável e responsabilidade.</Text>
				</View>
			</View>
			<View style={styles.valor}>
				<Text style={styles.numero}>02</Text>
				<View style={styles.valorTexto}>
					<Text style={styles.valorTitulo}>Conhecimento que aproxima</Text>
					<Text style={styles.valorDescricao}>Informação para criar laços melhores com os felinos.</Text>
				</View>
			</View>

			<Text style={styles.assinatura}>Com carinho, Clube Felino</Text>
		</ScrollView>
	);
}
