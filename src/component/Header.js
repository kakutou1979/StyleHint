import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';

const TopHeader = () => {
  return (
    <View>
      <Link to="/img"><Text>Img</Text></Link>
      <Link to="/about"><Text>About</Text></Link>
    </View>
  );
};

export default TopHeader;
