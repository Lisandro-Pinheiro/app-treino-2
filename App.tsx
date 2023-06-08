import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TitleComponent from './components/title-component';
import ImageComponent from './components/image-component';
import ButtonComponent from './components/button-component';


const App = () => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5xnzB-t8dgORupgOAo79EzvoA9aGmDAbIqAzMSiytw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCK6QwSRp69QqvP039qS7uO1_jSYh1J3dwbQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGMRfVrxssWRszOrzI3UY0hpKEaxDRoKhsQ&usqp=CAU',
  ];

  const [imageIndex, setIndex] = useState(0);

  const handleButtonPress = () => {
    if (imageIndex === 2) {
      setIndex(0);
    } else {
      setIndex(imageIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TitleComponent text="Meu Aplicativo" />
      <ImageComponent imageUrl={images[imageIndex]} />
      <ButtonComponent onPress={()=>handleButtonPress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    
  },
});

export default App;
