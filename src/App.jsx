/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import AboutContent from './component/AboutContent';
import AboutFloor from './component/AboutFloor';
import AboutFooter from './component/AboutFooter';
import AboutImgList from './component/AboutImgList';
import {OutfitContext} from './context'

const App = () => {
  return (
    <OutfitContext.Provider>
      <ScrollView style={styles.container}>
        <AboutContent />
        <AboutFloor />
        <AboutFooter />
        <AboutImgList />
      </ScrollView>
    </OutfitContext.Provider>
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
