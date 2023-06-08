import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  text: string;
}

export default function TitleComponent (props:any){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


