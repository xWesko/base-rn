import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const data = [
  {id: 1, fila: 1, seccion: 1, asiento: 1, sel: false, },
  {id: 2, fila: 1, seccion: 1, asiento: 2, sel: false, },
  {id: 3, fila: 1, seccion: 1, asiento: 3, sel: false, },
  {id: 4, fila: 1, seccion: 1, asiento: 4, sel: false, },
  {id: 5, fila: 1, seccion: 1, asiento: 5, sel: false, },
  {id: 6, fila: 1, seccion: 1, asiento: 6, sel: false, },
  {id: 7, fila: 1, seccion: 1, asiento: 7, sel: false, },
  {id: 8, fila: 1, seccion: 1, asiento: 8, sel: false, },
  {id: 9, fila: 1, seccion: 1, asiento: 9, sel: false, },
  {id: 10, fila: 1, seccion: 1, asiento: 10, sel: false, },
  {id: 11, fila: 1, seccion: 1, asiento: 11, sel: false, },
  {id: 12, fila: 1, seccion: 1, asiento: 12, sel: false, },
  {id: 13, fila: 1, seccion: 1, asiento: 13, sel: false, },
  {id: 14, fila: 1, seccion: 1, asiento: 14, sel: false, },
  {id: 15, fila: 1, seccion: 1, asiento: 15, sel: false, },
  {id: 16, fila: 1, seccion: 1, asiento: 16, sel: false, },
  {id: 17, fila: 1, seccion: 1, asiento: 17, sel: false, },
  {id: 18, fila: 1, seccion: 1, asiento: 18, sel: false, },
  {id: 19, fila: 1, seccion: 1, asiento: 19, sel: false, },
  {id: 20, fila: 1, seccion: 1, asiento: 20, sel: false, },
  {id: 21, fila: 1, seccion: 1, asiento: 21, sel: false, },
];

export default function HomeScreen({ navigation }) {

  const [asientos, setAsientos] = useState([]);
  const [bandera, setBandera] = useState(false);


  const seleccionarAsiento = (asiento) => {
    const _data = [...asientos];
    
    const _asientos = [];
    _data.forEach(i => {
      const find = i.id === asiento.id
      const obj = {
        ...i,
        sel: find ? true : false,
      }
      _asientos.push(obj)
    })
    setAsientos(_asientos);
    setBandera(false);
  };

  useEffect(() => {
    if(bandera) return
    setAsientos(data);
    setBandera(true)
  }, [asientos]);

  console.log(bandera)


  const SeatPicker = () => {
    return (
      <View style={styles.seccion}>
        {asientos.map(i => (
          <TouchableOpacity 
            onPress={() => seleccionarAsiento(i)}
            style={[styles.asiento, { backgroundColor: i.sel ? '#58D68D' : '#E3E3E3' }]} key={i.id}
          >
            <Text>{`${i.asiento}`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 18 }}>
            Hola Luis Hernandez
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/perfil.png')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 20
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Buscar..." />
        </View>

        <SeatPicker/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  seccion: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  asiento: {
    marginVertical: 1,
    marginHorizontal: 1,
    width: 40,
    height: 40,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})