import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio
} from 'react-native';

// 学习Text用法
export default class LearnTextClick extends Component{
  show(title){
    alert(title);
  }
  
  render() {
    var news = [];
    for(var i in this.props.news){
      var text = (
        <Text key={this.props.news[i]}
              onPress={this.show.bind(this,this.props.news[i])}
              numberOfLines={2}
              style={styles.font_1}>
          {this.props.news[i]}
        </Text>
      );
      news.push(text);
    }
    
    return(
        <View style={styles.flex}>
          <Text style={styles.news_title}>今日要闻</Text>
          {news}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  news_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CD1D1C',
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 10
  },
  font_1: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    lineHeight: 20,
    fontSize: 12
  }, 
});
