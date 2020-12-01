/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeRouter as Router, Route, Switch} from 'react-router-native';
import OutfitList from './component/OutfitList';
import About from './component/About';
import TopHeader from './component/Header';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TopHeader} />
        <Route path="/img" component={OutfitList} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
