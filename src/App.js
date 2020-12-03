/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import AboutContent from './component/AboutContent';
import AboutFloor from './component/AboutFloor';
import AboutFooter from './component/AboutFooter';
import AboutImgList from './component/AboutImgList';
import StoreContext from './context';
import store from "./store";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <View style={styles.container}>
        <AboutContent />
        <AboutFloor />
        <AboutFooter />
        <AboutImgList />
      </View>
    </StoreContext.Provider>
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
