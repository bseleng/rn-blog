import React, {useContext, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {withNavigation} from "react-navigation";
import {TNavigatiion} from "../types/Common";
import {Context} from "../context/BlogProvider";

interface IProps {
  navigation: TNavigatiion
}

const ShowScreen = ({  navigation}:IProps) => {
  const [isEditable, setIseditable] = useState(false)
  const blogPostId = navigation && navigation.getParam('id')
  const [state] = useContext(Context)
  /*TODO check usecallback */
  const getBlog = () => state.blogPosts.find(blogPost => blogPost.id === blogPostId)

  return (
    <View style={styles.wrap}>
          <Text style={styles.title}>{getBlog()?.id}</Text>
          <Text>{getBlog()?.author}</Text>
          <Text style={styles.content}>{getBlog()?.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  title: {
    fontSize: 24
  },
  content: {
    fontSize: 14
  },
})

export default withNavigation(ShowScreen)