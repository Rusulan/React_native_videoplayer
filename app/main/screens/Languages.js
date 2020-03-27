/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Languages extends Component{
  constructor(props){
    super(props);
    this.state = {
      flatListItems: [
        { id: '1', date: 'Feb 21 2020', title: 'Episode 1', description: 'Listen to two former refugess discuss their new lives after we are going to play', source: '' },
        { id: '2', date: 'Feb 24 2020', title: 'Episode 2', description: 'Listen to two former refugess discuss their new lives after we are going to play', source: '' },
        { id: '3', date: 'Feb 25 2020', title: 'Episode 3', description: 'Listen to two former refugess discuss their new lives after we are going to play', source: '' },
        { id: '4', date: 'Feb 26 2020', title: 'Episode 4', description: 'Listen to two former refugess discuss their new lives after we are going to play', source: '' },
        { id: '5', date: 'Feb 22 2020', title: 'Episode 5', description: 'Listen to two former refugess discuss their new lives after we are going to play', source: '' },
        { id: '6', date: 'Feb 20 2020', title: 'Episode 6', description: 'Listen to two former refugess discuss their new lives after we are going to play', source: '' },
        { id: '7', date: 'Feb 19 2020', title: 'Episode 7', description: 'Listen to two former refugess discuss their new lives after we are going to play', source: '' },
        { id: '8', date: 'Feb 02 2020', title: 'Episode 8', description: 'Listen to two former refugess discuss their new lives after we are going to play', source: '' },
      ],
      lastPlayedItem: {
        id: 1,
        date: 'Feb 21 2020',
        title: 'Episode 1',
        description: 'Listen to two former refugess discuss their new lives after we are going to play',
        source: '',
      },
    };
  }

  playLastVideo(id){
    // this.storeData(id);
    this.props.navigation.navigate('Player');
  }

  renderItem = ({item,index})=>{
    return(
      <View style = {styles.flatListView}>
        <TouchableOpacity style = {styles.flatListViewTouch} onPress = {()=> this.playLastVideo(index) } >
          <View>
            <Image source = {require('../../assets/images/pic.png')} style = {styles.flatListViewTouchImg} />
          </View>
          <View>
              <Text style = {styles.flatListViewTouchViewTextDate}>
                {item.date}
              </Text>
              <Text style = {styles.flatListViewTouchViewTextTitle}>
                {item.title}
              </Text>
              <Text style = {styles.flatListViewTouchViewTextDesc}>
                {item.description}
              </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  render(){
    return(
      <SafeAreaView style = {styles.container}>
        <View style = {styles.titleView}>
          <View style= {styles.titleViewRow1} >
            <Image
              source = {this.props.route.params.image}
              style  = {styles.titleViewRow1Img} />
            <Text style = {styles.titleViewRow1Text}>{this.props.route.params.title}</Text>
          </View>
          <View style= {styles.titleViewRow2}>
            <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}>
              <Image
                source={require('../../assets/images/close.png')}
                style = {styles.titleViewRow2Icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.historyView}>
          <TouchableOpacity onPress = {()=>this.playLastVideo(1)} style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
            <Image source = {require('../../assets/images/play-button.png')} style = {styles.historyViewPlayBtnImg} />
            
          </TouchableOpacity>
          <View style={styles.historyViewRow}>
            <Text style={ styles.historyViewText1 }>Play</Text>
            <Text style={ styles.historyViewText2 }>{this.props.route.params.title} {this.state.flatListItems[1].title}</Text>
          </View>
        </View>
        <View style = {styles.listView}>
          <FlatList
            data = {this.state.flatListItems}
            renderItem = {this.renderItem}
            keyExtractor = {item =>item.id}          
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  titleView:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:width*0.05,
    paddingHorizontal:width*0.05,
  },
  titleViewRow1:{
    flex:1,
    flexDirection:'row',
    alignSelf:'center',
  },
  titleViewRow1Img:{
    width:width*0.08,
    height:width*0.08,
    alignSelf:'center',
  },
  titleViewRow1Text:{
    flex:1,
    fontSize:24,
    color:'#111111',
    fontWeight:'bold',
    marginLeft:width*0.03,
    alignSelf:'center',
  },
  titleViewRow2:{

  },
  titleViewRow2Icon:{
    width:width*0.04,
    height:width*0.04,
    alignContent:'flex-end',
  },
  historyView:{
    flex:1,
    flexDirection:'row',
    paddingHorizontal:width*0.05,
  },
  historyViewPlayBtnImg:{
     width:width*0.08,
     height:width*0.08, 
  },
  historyViewRow:{ 
    flexDirection: 'column', 
    marginLeft: 10, 
    justifyContent: 'center',
  },
  historyViewText1:{
    fontWeight: 'bold',
  },
  historyViewText2:{
    color: '#333333',
  },
  listView:{
    flex:8,
  },
  flatListView:{
    flexDirection:'row',
    padding:5,
    borderBottomColor:'#aaaaaa',
    borderBottomWidth:1,
  },
  flatListViewTouch:{
    flexDirection:'row',
    justifyContent:'center',
  },
  flatListViewTouchImg:{
    width:width*0.4,
    height:width*0.22,
  },
  flatListViewTouchViewTextDate:{
    color:'#333333',
    paddingHorizontal:10,
    fontSize:10,
    width:width,
  },
  flatListViewTouchViewTextTitle:{
    color: '#000000',
    fontWeight: '800', 
    fontSize: 18, 
    paddingHorizontal: 10, 
    width: width,
  },
  flatListViewTouchViewTextDesc:{
    color: '#555555', 
    paddingHorizontal: 10, 
    fontSize: 14, 
    paddingTop: 3, 
    width: width,
  }
});