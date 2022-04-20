import React, {useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import {withNavigation} from "react-navigation";
import {TNavigatiion} from "../types/Common";
import {Context} from "../context/BlogProvider";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Feather} from '@expo/vector-icons';
import Routes from "../constants/routes";
import {getBlog} from "../utils/utils";

interface IProps {
  navigation: TNavigatiion
}

const ShowScreen = ({navigation}:IProps) => {
  const blogPostId = navigation.getParam('id')
  const [state] = useContext(Context)
  const currentBlog = getBlog(state, blogPostId)

  return (
    <View style={styles.wrap}>
          {/*<Text style={styles.title}>{getBlog()?.id}</Text>*/}
          <Text>{currentBlog?.author}</Text>
          <Text style={styles.content}>{currentBlog?.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 24
  },
  content: {
    fontSize: 14
  },
})

ShowScreen.navigationOptions= ({navigation}:IProps) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Edit, {id: navigation.getParam('id')})}>
        <Feather name="edit-2" size={35} color="black" />
      </TouchableOpacity>
    ),
  };
}

export default withNavigation(ShowScreen)