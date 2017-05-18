import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  PixelRatio,
  View
} from 'react-native';


// 学习按钮用法
export default class LearnImageUI extends Component{

  /*

  */
  render() {
      return(
        <ScrollView style={styles.container}>
          <TouchableHighlight
            onPress={() => {
              this.show('✨ 豪华游轮济州岛3日游')
            }}
            underlayColor="#E1F6FF">
            <Text style={styles.list_item}>✨ 豪华游轮济州岛3日游</Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={this.show.bind(this,'豪华游轮台湾七日游')}
            underlayColor="#E1F6FF">
            <Text style={styles.list_item}>✨ 豪华游轮台湾7日游</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btn}>
                <Text style={styles.list_item}>✨ 豪华游轮</Text>  
            </View>
          </TouchableOpacity>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  list_item: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderBottomWidth: 1/PixelRatio.get(),
    borderBottomColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    marginLeft: 30,
    marginTop: 30,
    width: 100,
    height: 100,
    backgroundColor: '#18B4FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  container: {
    flex: 1,
    marginTop: 25,
  },
  font: {
    fontSize: 16
  }, 
});
