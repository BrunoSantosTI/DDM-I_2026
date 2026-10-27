import { Image, ScrollView, Text, View } from 'react-native';

import styles from './Estilo';

const especies = [
	{
		nome: 'Siamês',
		descricao: 'Sociável e comunicativo, costuma acompanhar cada passo da família.',
		imagem: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=600&q=80',
		origem: 'TAILÂNDIA',
	},
	{
		nome: 'Maine Coon',
		descricao: 'Grandalhão gentil, conhecido pela pelagem longa e personalidade tranquila.',
		imagem: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
		origem: 'ESTADOS UNIDOS',
	},
	{
		nome: 'Pelo curto brasileiro',
		descricao: 'Esperto, brincalhão e cheio de variedades: cada um tem seu próprio charme.',
		imagem: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80',
		origem: 'BRASIL',
	},
];

export default function Especies() {
	return (
		<ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
			<Text style={styles.marca}>GUIA FELINO / 01</Text>
			<Text style={styles.titulo}>Cada gato, um universo.</Text>
			<Text style={styles.subtitulo}>
				Conheça algumas raças e seus traços marcantes. Personalidade também depende de cada indivíduo.
			</Text>

			{especies.map((especie, indice) => (
				<View key={especie.nome} style={styles.cartao}>
					<Image source={{ uri: especie.imagem }} style={styles.imagem} accessibilityLabel={`Gato da raça ${especie.nome}`} />
					<View style={styles.textosCartao}>
						<Text style={styles.indice}>0{indice + 1}  /  {especie.origem}</Text>
						<Text style={styles.nome}>{especie.nome}</Text>
						<Text style={styles.descricao}>{especie.descricao}</Text>
					</View>
				</View>
			))}

			<Text style={styles.nota}>Adotar é conhecer a personalidade de um novo melhor amigo, com ou sem raça definida.</Text>
		</ScrollView>
	);
}
