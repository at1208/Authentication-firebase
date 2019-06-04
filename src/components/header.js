import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles
  return (
      <View style={viewStyle}>
      <Text style={textStyle}>Authentication</Text>
      </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 40,
    color: 'black'
  },
  viewStyle: {
  marginTop: 50,

  alignItems: 'center',


  backgroundColor: 'yellow',
  }
};


export default Header;
