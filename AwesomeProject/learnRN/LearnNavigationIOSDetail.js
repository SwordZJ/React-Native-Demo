import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

// 学习Text用法
export default class LearnNavigationIOSDetail extends Component{
  render() {
      return(
        <ScrollView>
          <Text>详情页</Text>
          <Text>尽管信息很少，但这就是详情页</Text>
        </ScrollView>
    );
  }
}
