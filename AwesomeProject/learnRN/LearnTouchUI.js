import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  PixelRatio,
  TouchableHighlight
} from 'react-native';


// 学习按钮用法
export default class LearnTouchUI extends Component{
  show(text){
      alert(text);
  }
  
  render() {
      return(
        <ScrollView>
          <TouchableHighlight
            onPress={this.show.bind(this,'✨ 豪华游轮济州岛3日游')}
            underlayColor="#E1F6FF">
            <Text style={styles.list_item}}>✨ 豪华游轮济州岛3日游</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={styles.list_item}}>✨ 豪华游轮台湾7日游</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={styles.list_item}}>✨ 豪华游轮地中海8日游</Text>  
          </TouchableHighlight>
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
