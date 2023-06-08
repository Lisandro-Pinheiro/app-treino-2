import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

interface Props {
  imageUrl: string;
}

export default function ImageComponent (props:any){
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.imageUrl}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

