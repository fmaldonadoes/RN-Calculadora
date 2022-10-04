import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  texto: string;
  alinear?: string;
  color?: string;
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 160 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
            textAlign: texto === '0' ? 'left' : 'center',
            paddingLeft: texto === '0' ? 24 : 10,
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  botonTexto: {
    textAlign: 'center',
    fontSize: 32,
    padding: 10,
    color: 'white',
  },
});
