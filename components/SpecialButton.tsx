import React from 'react';
import {Pressable, Text, StyleSheet, Image, View} from 'react-native';

const SpecialButton = ({
  title,
  image,
  onPress,
}: {
  title: string;
  image?: string;
  onPress: () => void;
}) => {
  if (image) {
    return (
      <Pressable onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  text: {fontSize: 25, fontFamily: 'Dosis', color: '#000000'},
  image: {height: 25, width: 25, margin: 5, marginRight: 5},
  container: {flexDirection: 'row', padding: 5},
});

export default SpecialButton;
