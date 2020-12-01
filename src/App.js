/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import AboutContent from './component/AboutContent';
import AboutFloor from './component/AboutFloor';
import AboutFooter from './component/AboutFooter';
import AboutImgList from './component/AboutImgList';

const App = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <AboutContent />
        <AboutFloor />
        <AboutFooter />
        <AboutImgList />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbe2d5',
    paddingVertical: 15,
  },
});

export default App;
