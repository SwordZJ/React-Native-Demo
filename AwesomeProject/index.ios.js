/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  NavigatorIOS
} from 'react-native';
import LearnView from './learnRN/ViewRN';
import LearnText from './learnRN/TextRN';
import LearnTextList from './learnRN/TextRNList';
import LearnTextClick from './learnRN/TextRNClick';
import LearnNavigationIOS from './learnRN/LearnNavigationIOS';
import TextInputRN from './learnRN/TextInputRN';
import LearnTouchUI from './learnRN/LearnTouchUI';

/*   // 处理View+Text的视图
      <View style={{flex:1}}>
        <LearnText></LearnText>
        <LearnTextList title='宇航员在太空宣布三体获奖'></LearnTextList>
        <LearnTextList title='NASA发短片纪念火星征程50年'></LearnTextList>
        <LearnTextList title='男生连续做一周苦瓜吃吐女友'></LearnTextList>
        <LearnTextList title='女童遭鲨鱼袭击又下海救伙伴'></LearnTextList>
        <LearnTextClick news={[
            '1.刘慈欣《三体》获“雨果奖”为中国作家首次，世界是中国的，世界文化也是中国的',
            '2.京津翼协同发展定位明确：北京无经济中心表述，我已经是了，特么还要这个定位干嘛',
            '3.好奇宝宝第一次淋雨，父亲用镜头记录了下来，可以编辑在册，《宝宝成长日记》正式在线',
            '4.人民邮电出版社即将出版《React Native入门与实战》，读者可以使用JavaScript开发原生应用，原生开发的逗逼们，我们只是来抢个饭碗'
          ]}>
        </LearnTextClick>
      </View>
*/

/*
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
          component: LearnNavigationIOS,
          title: '游轮',
          passProps:{},
        }}
        />
*/

export default class AwesomeProject extends Component {
  render() {
    return (
      <LearnTouchUI/>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
