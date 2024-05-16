import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import Footer from './src/components/Footer';
import { useState } from 'react';

export default function App() {

const [nome, setNome] = useState('');

function pegaNome(texto) {
  setNome(texto)
}

  return (
    <View style={{backgroundColor: '#FFFAFA'}}>
    
    <View style={styles.container}>
      
      <Image
          source={{uri: './img/coragem 1.png'}}
          //style={{width: 90, height: 90}}
          style={ styles.img }
            />
      
      <Image
          source={{uri: './img/coragem 6.png'}}
          //style={{width: 90, height: 90}}
          style={ styles.img }
            />

      <Image
          source={{uri: './img/coragem 4.png'}}
          //style={{width: 90, height: 90}}
          style={ styles.img }
            />

      </View>

        <View>
      
      <Image
          source={{uri: './img/coragem 5.png'}}
          style={ styles.img2 }
      />
    
        </View >
        <View style={styles.container2}>
          <TextInput
          style={styles.input}
          onChangeText={(texto) => { pegaNome(texto)}}
          placeholder= "Digite seu e-mail"
          />

          <TextInput
          style={styles.input}
          //onChangeText={}
          placeholder= "Digite sua senha"
          />

          <Button 
          style={styles.button}
          title='Login'
          color={'#DB7093'}
          />

        </View>

        <View style={{height: 150, width: '100%'}}>
          <Footer />
        </View>

        {
          nome.length <= 2 ? null : <Text>Seja bem-vindo(a) {nome}</Text>
        }

    
      <StatusBar style="auto" />
      </View>
  );
}
    



const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#DB7093',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
    marginTop: 15,
    padding: 10,

    
  },

  img:{
    width: 90, 
    height: 90,
    margin: 5,
    
  },

  img2:{
    width: 410,
    height: 310,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 90,
    backgroundColor: 'pink'

  },

  input:{
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },

  button:{
    width: '50%',
  },

container2:{
  alignItems: 'center',
  backgroundColor: '#FFFAFA',
  flex: 5,
  
}
  
});
