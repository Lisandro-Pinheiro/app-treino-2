import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

interface Props {
  onPress: any;
}
export default function ButtonComponent (props:any){

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>props.onPress()}>
        <Text style={styles.buttonText}>Clique Aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


