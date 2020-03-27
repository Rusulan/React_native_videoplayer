/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class LanguageScreen extends Component {a
  constructor(props) {
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

  playLastVideo(id) {
    this.storeData(id);
    this.props.navigation.navigate('Player');
  }

  storeData = async index => {
    try {
      await AsyncStorage.setItem('videoIndex', JSON.stringify(index));
    } catch (error) {
      console.log('failed to save item into storage');
    }
  }

  retrieveData = () => {
    try {
      const value = AsyncStorage.getItem('videoIndex');
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', padding: 6, borderBottomColor: '#aaaaaa', borderBottomWidth: 1 }}>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' }} onPress={() => this.playLastVideo(index)}>
          <View>
            <Image source={require('../assets/images/pic.png')} style={{ width: width * 0.4, height: width * 0.22 }} />
          </View>
          <View>
            <Text style={{ color: '#333333', paddingHorizontal: 10, fontSize: 10, width: width }}>
              {item.date}
            </Text>
            <Text style={{ color: '#000000', fontWeight: '800', fontSize: 18, paddingHorizontal: 10, width: width }}>
              {item.title}
            </Text>
            <Text style={{ color: '#555555', paddingHorizontal: 10, fontSize: 14, paddingTop: 3, width: width }}>
              {item.description}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
            <Image
              source={this.props.route.params.image}
              style={styles.img} />
            <Text style={styles.text}>{this.props.route.params.title}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../assets/images/close.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.historyView}>
          <TouchableOpacity onPress={() => this.playLastVideo(1)} style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
            <Image
              source={require('../assets/images/play-button.png')}
              style={styles.playBtn}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>Play</Text>
            <Text style={{ color: '#333333' }}>{this.props.route.params.title} {this.state.flatListItems[1].title}</Text>
          </View>
        </View>
        <View style={styles.listView}>
          <FlatList
            data={this.state.flatListItems}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.05,
    paddingHorizontal: width * 0.05,
  },
  historyView: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
  },
  listView: {
    flex: 8,
  },
  img: {
    width: width * 0.08,
    height: width * 0.08,
    alignSelf: 'center',
  },
  icon: {
    width: width * 0.04,
    height: width * 0.04,
    alignContent: 'flex-end',
  },
  playBtn: {
    width: width * 0.08,
    height: width * 0.08,
  },
  text: {
    flex: 1,
    fontSize: 24,
    color: '#111111',
    fontWeight: 'bold',
    marginLeft: width * 0.03,
    alignSelf: 'center',
  },
});
export default LanguageScreen;
