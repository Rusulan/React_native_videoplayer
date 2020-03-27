import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class VideoPlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> React Native Video </Text>
        <Video
          source={require('../../assets/sample.mp4')}
          ref={ref => {
            this.player = ref;
          }}
          fullscreen={true}
          resizeMode="contain"
          controls={true}
          onBuffer={this.onBuffer}
          onEnd={this.onEnd}
          onError={this.videoError}
          style={styles.backgroundVideo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000',
    opacity: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    // bottom: 300,
    bottom: 0,
    right: 0,
  },
  text: {
    position: 'absolute',
    top: 10,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default VideoPlayer;
