import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const videoData = [
  {
    title: "Intro to Personal Health1",
    items: [
      {
        id: "1",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "2",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "3",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "4",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "5",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      }
    ]
  },
  {
    title: "cat2",
    items: [
      {
        id: "1",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "2",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "3",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "4",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "5",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      }
    ]
  },
  {
    title: "cat3",
    items: [
      {
        id: "1",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "2",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "3",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "4",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "5",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      }
    ]
  },
  {
    title: "cat4",
    items: [
      {
        id: "1",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "2",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "3",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "4",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      },
      {
        id: "5",
        time: "10 min",
        title: "Personal Fitness",
        description:
          "Listen to two former refugess discuss their new lives after we are going to play",
        source: "",
        image: require("../../assets/images/pic.png"),
        video: require("../../assets/sample.mp4")
      }
    ]
  }
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatListItems: videoData,
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
  playLastVideo(item) {
    this.props.navigation.navigate("VideoPlayer", { item: item });
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.categoryText}>{item.title}</Text>
        <ScrollView directionalLockEnabled={false} horizontal={true}>
          {item.items.map((element, index) => {
            return (
              <View style={styles.item_items} key={index}>
                <TouchableOpacity onPress={() => this.playLastVideo(element)}>
                  <ImageBackground
                    source={element.image}
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.item_itemsImageBackground}
                  >
                    <View style={styles.item_itemsImageBackgroundColumn}>
                      <Text style={styles.item_itemsImageBackgroundColumnTime}>
                        {element.time}
                      </Text>
                      <View style={styles.item_itemsImageBackgroundColumnCenter} >
                        <Image
                          source={require("../../assets/images/play-button.png")}
                          style={ styles.item_itemsImageBackgroundColumnCenterImage }
                        />
                      </View>
                      <Text style={styles.item_itemsImageBackgroundColumnTitle}>
                        {element.title}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <View>
            <Text style={styles.titleText}>Discover</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.categoryView}>
            <FlatList
              data={this.state.flatListItems}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  scrollview: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    padding: 10
  },
  titleView: {
    marginTop: width * 0.05,
    marginBottom: width * 0.01,
    paddingHorizontal: width * 0.05
  },
  titleText: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold"
  },
  categoryView: {
    marginHorizontal: 10
  },
  categoryText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10
  },
  item: {
    marginVertical: 5
  },
  item_items: {
    marginRight: 10,
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center"
  },
  item_itemsImageBackground: {
    width: width * 0.35,
    height: width * 0.55
  },
  item_itemsImageBackgroundColumn: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%"
  },
  item_itemsImageBackgroundColumnTime: {
    color: "#ffffff",
    padding: 10,
    fontSize: 11,
    width: width
  },
  item_itemsImageBackgroundColumnCenter: {
    flexDirection: "row",
    justifyContent: "center"
  },
  item_itemsImageBackgroundColumnCenterImage: {
    width: width * 0.1,
    height: width * 0.1
  },
  item_itemsImageBackgroundColumnTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 11,
    paddingHorizontal: 10,
    width: width
  }
});
