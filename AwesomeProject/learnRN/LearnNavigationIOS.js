import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  PixelRatio
} from 'react-native';

import LearnNavigationIOSDetail from './LearnNavigationIOSDetail'

// 学习Text用法
export default class LearnNavigationIOS extends Component{
  goTo(){
    this.props.navigator.push({
      component: LearnNavigationIOSDetail,
      title: 'Detail',
      rightButtonTitle: '购物车',
      onRightButtonPress(){
        alert('进入我的购物车');
      }
    });
  }
  
  
  render() {
      return(
        <ScrollView>
          <Text style={styles.list_item} onPress={this.goTo.bind(this)}>✨ 豪华游轮济州岛3日游</Text>
          <Text style={styles.list_item} onPress={this.goTo.bind(this)}>✨ 豪华游轮台湾7日游</Text>
          <Text style={styles.list_item} onPress={this.goTo.bind(this)}>✨ 豪华游轮地中海8日游</Text>
        </ScrollView>
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
