import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text, View, StyleSheet } from 'react-native';

import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Especies from './screens/especies/Especies';
import Sobre from './screens/sobre/Sobre';

const Stack = createNativeStackNavigator();
const rotas = [
  { nome: 'Home', titulo: 'Início' },
  { nome: 'Especies', titulo: 'Espécies' },
  { nome: 'Sobre', titulo: 'Sobre' },
];

function NavegacaoInferior({ navigation, rotaAtual }) {
  return (
    <View style={styles.barra}>
      {rotas.map((rota) => {
        const ativa = rotaAtual === rota.nome;
        return (
          <Pressable
            key={rota.nome}
            accessibilityRole="button"
            accessibilityState={{ selected: ativa }}
            onPress={() => navigation.navigate(rota.nome)}
            style={styles.itemNavegacao}
          >
            <View style={[styles.indicador, ativa && styles.indicadorAtivo]} />
            <Text style={[styles.textoNavegacao, ativa && styles.textoAtivo]}>
              {rota.titulo}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function criarTelaComNavegacao(Tela) {
  return function TelaComNavegacao({ navigation, route }) {
    return (
      <View style={styles.pagina}>
        <Tela navigation={navigation} route={route} />
        <NavegacaoInferior navigation={navigation} rotaAtual={route.name} />
      </View>
    );
  };
}

const HomeComNavegacao = criarTelaComNavegacao(Home);
const EspeciesComNavegacao = criarTelaComNavegacao(Especies);
const SobreComNavegacao = criarTelaComNavegacao(Sobre);

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#F7F5EF',
  },
  barra: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 68,
    paddingHorizontal: 8,
    paddingBottom: 8,
    backgroundColor: '#FFFEFA',
    borderTopWidth: 1,
    borderTopColor: '#E8E4D9',
  },
  itemNavegacao: {
    flex: 1,
    minHeight: 54,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  indicador: {
    width: 18,
    height: 3,
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  indicadorAtivo: {
    width: 28,
    backgroundColor: '#D56D4D',
  },
  textoNavegacao: {
    color: '#77796F',
    fontSize: 12,
    fontWeight: '600',
  },
  textoAtivo: {
    color: '#273D35',
    fontWeight: '700',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          contentStyle: { backgroundColor: '#F7F5EF' },
        }}
      >
        <Stack.Screen name="Home" component={HomeComNavegacao} />
        <Stack.Screen name="Especies" component={EspeciesComNavegacao} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sobre" component={SobreComNavegacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}