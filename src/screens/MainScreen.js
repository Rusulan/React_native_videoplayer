/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardView from 'react-native-cardview';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const images = {
  world: require('../assets/images/world.png'),
  money: require('../assets/images/money.png'),
  dance: require('../assets/images/dance.png'),
  book: require('../assets/images/book.png'),
  fashion: require('../assets/images/fashion.png'),
  music: require('../assets/images/music.png'),
};

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.navigate = this.navigate.bind(this);
  }

  navigate = (screen, title, imgSrc) => {
    this.props.navigation.navigate(screen, {
      title: title,
      image: imgSrc,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <View>
            <Text style={styles.titleText}>Explorer video topics</Text>
            <Text style={styles.descText}>
              What would you like to learn today?
            </Text>
          </View>
        </View>
        <View style={styles.gridView}>
          <View style={styles.row}>
            <CardView
              style={styles.item}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <TouchableOpacity
                style={styles.itemBox}
                onPress={() => {
                  this.navigate('Language', 'Languages', images.world);
                }}>
                <Image source={images.world} style={styles.image} />
                <Text style={styles.itemText}>Languages</Text>
              </TouchableOpacity>
            </CardView>
            <CardView
              style={styles.item}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <TouchableOpacity
                style={styles.itemBox}
                onPress={() => {
                  this.navigate('Language', 'Finance', images.money);
                }}>
                <Image source={images.money} style={styles.image} />
                <Text style={styles.itemText}>Finance</Text>
              </TouchableOpacity>
            </CardView>
          </View>
          <View style={styles.row}>
            <CardView
              style={styles.item}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <TouchableOpacity
                style={styles.itemBox}
                onPress={() => {
                  this.navigate('Language', 'Dance', images.dance);
                }}>
                <Image source={images.dance} style={styles.image} />
                <Text style={styles.itemText}>Dance</Text>
              </TouchableOpacity>
            </CardView>
            <CardView
              style={styles.item}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <TouchableOpacity
                style={styles.itemBox}
                onPress={() => {
                  this.navigate('Language', 'Reading', images.book);
                }}>
                <Image source={images.book} style={styles.image} />
                <Text style={styles.itemText}>Reading</Text>
              </TouchableOpacity>
            </CardView>
          </View>
          <View style={styles.row}>
            <CardView
              style={styles.item}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <TouchableOpacity
                style={styles.itemBox}
                onPress={() => {
                  this.navigate('Language', 'Fashion', images.fashion);
                }}>
                <Image source={images.fashion} style={styles.image} />
                <Text style={styles.itemText}>Fashion</Text>
              </TouchableOpacity>
            </CardView>
            <CardView
              style={styles.item}
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <TouchableOpacity
                style={styles.itemBox}
                onPress={() => {
                  this.navigate('Language', 'Music', images.music);
                }}>
                <Image source={images.music} style={styles.image} />
                <Text style={styles.itemText}>Music</Text>
              </TouchableOpacity>
            </CardView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  titleView: {
    flex: 20,
    marginHorizontal: width * 0.08,
    justifyContent: 'center',
  },
  gridView: {
    flex: 80,
    flexDirection: 'column',
    marginBottom: width * 0.05,
    marginHorizontal: width * 0.05,
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    margin: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBox: {
    alignItems: 'center',
  },
  itemText: {
    marginTop: width * 0.03,
    color: '#222222',
    fontSize: 16,
    fontWeight: '800',
  },
  titleText: {
    color: '#5d5cf6',
    fontSize: 28,
    fontWeight: 'bold',
  },
  descText: {
    color: '#aaaaaa',
    fontSize: 14,
    marginTop: width * 0.01,
  },
  image: {
    width: width * 0.15,
    height: width * 0.15,
  },
});

export default MainScreen;
