import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio
} from 'react-native';

// 学习Text用法
export default class LearnTextList extends Component{
  render() {
      return(
        <View style={styles.list_item}>
          <Text style={styles.text}>
            {this.props.title}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  list_item: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderBottomWidth: 1/PixelRatio.get(),
    borderBottomColor: '#ddd',
    justifyContent: 'center',
  },

  font: {
    fontSize: 16
  }, 
});
