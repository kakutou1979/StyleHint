/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const AboutContent = () => {
  return (
    <View style={styles.contentContainer}>
      <Image source={require('../../res/img/download_banner_slogan_en.png')} />
      <Text style={{lineHeight: 30}}>Discover new ways to style yourself.</Text>
      <TouchableOpacity activeOpacity={0.5}>
        <View>
          <Text style={{lineHeight: 50}}>About the App ></Text>
        </View>
      </TouchableOpacity>
      <Image
        source={require('../../res/img/download_banner_phone_other_en.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 15,
  },

  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 300,
    height: 300,
    backgroundColor: Colors.red,
  },
});

export default AboutContent;
