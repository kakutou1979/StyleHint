/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const AboutFloor = () => {
  return (
    <>
      <View style={styles.floorContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../res/img/download_button_ios_sp_en.png')}
          />
          <Image
            source={require('../../res/img/download_button_android_sp_en.png')}
          />
        </View>
        <View style={styles.textColumnContainer}>
          <Text style={{lineHeight: 30}}>Download the app now and get</Text>
          <View style={styles.textRowContainer}>
            <Text style={{fontSize: 10}}>$</Text>
            <Text style={{fontSize: 30}}>3</Text>
            <Text> off your next purchase</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  floorContainer: {
    backgroundColor: '#f0c8af',
  },

  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingTop: 20,
  },

  textColumnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  textRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AboutFloor;
