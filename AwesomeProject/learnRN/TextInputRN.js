import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TextInput
} from 'react-native'

var onePT = 1 / PixelRatio.get();
export default class TextInputRN extends Component{
   render() {
    return (
      <View style={[styles.flex,styles.topStatus]}>
        <Search></Search>
      </View>
    );
  }
}

class Search extends Component{
    
  constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: ''
        };
    }
  
  

  render() {
    return (
      <View style={styles.flex}>
        <View style={[styles.flexDirection,styles.inputHeight]}>
          <View style={styles.flex}>
            <TextInput  style={styles.input} 
                returnKeyType="search" 
                 placeholder='请输入关键字'
                 onEndEditing={() => this.setState({show:false,value:this.state.value})}
                        value={this.state.value}
                 onChangeText={(text) => this.setState({show:text != '' ? true : false,value:text})}
              >
            </TextInput>
          </View>
          <View style={styles.btn}>
            <Text style={styles.search} onPress={() => this.setState({show:true,value:this.state.value})}>搜索</Text>
          </View>
        </View>  
        {this.state.show ? 
        <View style={styles.result}>
          <Text onPress={() => this.setState({show:false,value:this.state.value + '庄'})}
                style={styles.item} numberOfLines={1}>
            {this.state.value}庄
          </Text>
          <Text onPress={() => this.setState({show:false,value:this.state.value + '园街'})}
                style={styles.item} numberOfLines={1}>
            {this.state.value}园街
          </Text>
          <Text onPress={() => this.setState({show:false,value:this.state.value + '综合商店'})}
                style={styles.item} numberOfLines={1}>
            80{this.state.value}综合商店
          </Text>
          <Text onPress={() => this.setState({show:false,value:this.state.value + '涛'})}
                style={styles.item} numberOfLines={1}>
            {this.state.value}涛
          </Text>
          <Text onPress={() => this.setState({show:false,value:'杨林'+ this.state.value + '村'})}
                style={styles.item} numberOfLines={1}>
            杨林{this.state.value}村
          </Text>
        </View> 
        : null}
      </View>
      

    );
  }
}


const styles = StyleSheet.create({
  flexDirection: {
    flexDirection: 'row'
  },
  inputHeight: {
    height: 45,
  },
  input: {
    marginLeft: 5,
    height: 45,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor:'#ccc',
    borderRadius: 4
  },
  search: {
    color: '#fff',
    fontSize:15,
    fontWeight: 'bold'
  },
  btn: {
    width: 55,
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#23BFFF',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topStatus: {
    marginTop: 25,
  },
  flex: {
    flex: 1,
  },
  result: {
    marginTop: onePT,
    marginLeft: 5,
    marginRight: 5,
    height: 200,
    borderColor: '#ccc',
    borderTopWidth:onePT,
  },
  item: {
    fontSize: 16,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: onePT,
    borderColor: '#ddd',
    borderTopWidth: 0
  },
});


