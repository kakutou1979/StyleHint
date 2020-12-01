/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutFooter = () => {
  return (
    <View style={styles.floorContainer}>
      <Text>
        ※ Offer is valid at UNIQLO stores in the US excluding UNIQLO Ala Moana
        for purchases more than $30 not including sales tax, for a discount of
        $3. ※ Users must have an online accunt with UNIQLO.com. ※ This campaign
        is subject to change or end without notice.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  floorContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
});

export default AboutFooter;
