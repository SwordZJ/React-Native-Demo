import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio
} from 'react-native';

// 学习Text用法
export default class LearnText extends Component{
  render() {
      return(
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.font_1}>网易</Text>
            <Text style={styles.font_2}>新闻</Text>
            <Text>有态度°</Text>
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 50,
    borderBottomWidth: 3/PixelRatio.get(),
    borderBottomColor: '#EF2D36',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center', // 文字居中
  },
  font_1: {
    color: '#CD1D1C' 
  }, 
  font_2: {
    color: '#FFF',
    backgroundColor: '#CD1D1C'
  },
});
