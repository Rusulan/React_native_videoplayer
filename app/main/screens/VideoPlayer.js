import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import Video from "react-native-af-video-player";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const theme = {
  title: "#FFF",
  more: "#446984",
  center: "#7B8F99",
  fullscreen: "#446984",
  volume: "#A5957B",
  scrubberThumb: "#234458",
  scrubberBar: "#DBD5C7",
  seconds: "#DBD5C7",
  duration: "#DBD5C7",
  progress: "#446984",
  loading: "#DBD5C7"
};

const videoData = [
  {
    category: "Intro to Personal Health",
    items: [
      {
        id: "1",
        time: "10 min",
        title: "Personal Fitness1",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "2",
        time: "10 min",
        title: "Personal Fitness2",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample1.mp4")
      },
      {
        id: "3",
        time: "10 min",
        title: "Personal Fitness3",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample2.mp4")
      },
      {
        id: "4",
        time: "10 min",
        title: "Personal Fitness4",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample3.mp4")
      },
      {
        id: "5",
        time: "10 min",
        title: "Personal Fitness5",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      }
    ]
  }
];

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailItem: this.props.route.params.item,
      url: this.props.route.params.item.video,
      lastPlayedItem: {
        id: 1,
        date: "Feb 21 2020",
        title: "Episode 1",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: ""
      }
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    // Setup the header and tabBarVisible status
    const header = state.params && (state.params.fullscreen ? undefined : null);
    const tabBarVisible = state.params ? state.params.fullscreen : true;
    return {
      // For stack navigators, you can hide the header bar like so
      header,
      // For the tab navigators, you can hide the tab bar like so
      tabBarVisible
    };
  };

  onFullScreen(status) {
    // Set the params to pass in fullscreen status to navigationOptions
    this.props.navigation.setParams({
      fullscreen: !status
    });
  }

  onMorePress() {
    Alert.alert("More Press", "This is an action call!", [{ text: "Ok!" }]);
  }

  playLastVideo(element) {
    console.log(element);

    this.setState({ url: element.video });
  }
  renderItem = ({ item }) => {
    return (
      <View>
        {item.items.map(element => {
          return (
            <View style={ styles.element}>
              <TouchableOpacity
                onPress={() => this.playLastVideo(element)}>
                <View style={ styles.elementRow }>
                  <View>
                    <Image
                      source={element.image}
                      style={ styles.elementRowImage }
                    />
                  </View>
                  <View style={styles.elementRowRight}>
                    <Text style={styles.elementRowRightTitle}>
                      {element.title}
                    </Text>
                    <Text style={styles.elementRowRightCategory}>
                      {item.category}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };
  render() {
    const logo = require("../../assets/images/videologo.png");
    const placeholder = require("../../assets/images/placeholder.png");
    return (
      <View style={styles.container}>
        <Video
          autoPlay
          ref={ref => {
            this.video = ref;
          }}
          theme={theme}
          url={this.state.url}
          title={this.state.detailItem.title}
          logo={logo}
          placeholder={placeholder}
          onMorePress={() => this.onMorePress()}
          onFullScreen={status => this.onFullScreen(status)}
        />
        <ScrollView>
          <View style={styles.scrollview}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>
                {this.state.detailItem.title}
              </Text>
              <Text style={styles.titletime}>
                {this.state.detailItem.time}
              </Text>
            </View>
            <View style={styles.DescriptionView}>
              <Text style={ styles.titleDescription}>
                {this.state.detailItem.description}
              </Text>
            </View>
            <View style={styles.titleView}>
              <Text style={{ ...styles.titleText }}>Related Videos</Text>
            </View>
            <View style={styles.content}>
              <FlatList
                data={videoData}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollview: {
    width: width * 0.9, marginLeft: width * 0.05
  },
  content: {
    flexGrow: 1
  },
  titleView: {
    flex: 1,
    width: width * 0.9,
    marginTop: width * 0.01,
    marginBottom: width * 0.02,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleText: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold"
  },
  titletime:{
     color: "#aaaaaa",
     fontSize: 15 ,
  },
  titleDescription:{
      color: "#000000",
      fontSize: 15,
      paddingBottom: 20,
      borderBottomColor: "#aaaaaa",
      borderBottomWidth: 1,
  },
  categoryText: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold"
  },
  DescriptionView: {
    marginTop: width * 0.05,
    marginBottom: width * 0.05
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  element:{
    marginRight: 10,
    marginBottom: 10 ,
    flexDirection: "column",
    justifyContent: "center"
  },
  elementRow:{
    flexDirection: "row",
  },
  elementRowImage:{
    width: width * 0.4,
    height: width * 0.25
  },
  elementRowRight:{
    paddingVertical: 10,
  },
  elementRowRightTitle:{
    color: "#000000",
    fontWeight: "bold",
    padding: 10,
    fontSize: 15,
    width: width,
  }, 
  elementRowRightCategory:{
    color: "#aaaaaa",
    fontSize: 10,
    paddingHorizontal: 10,
    width: width
  },
});
