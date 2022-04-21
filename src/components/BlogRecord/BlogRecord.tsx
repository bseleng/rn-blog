import React, {useContext, useState} from 'react';
import {Feather} from "@expo/vector-icons";
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {blogPost} from "../../types/State";
import * as Haptics from 'expo-haptics';
import {Context} from "../../context/BlogProvider";
import Routes from "../../constants/routes";
import {withNavigation} from "react-navigation";
import {TNavigatiion} from "../../types/Common";

interface IProps {
  blogPost: blogPost,
  navigation?: TNavigatiion
}

const BlogRecord = ({blogPost, navigation}: IProps) => {
  const [isEditable, setIsEditable] = useState(false)
  const [, {deleteBlogPost}] = useContext(Context)
  const goToPost = () => {
    navigation && navigation.navigate(Routes.Show, {id: blogPost.id})
    setIsEditable(false)
  }

  return (
    <View        style={styles.item} >
      <Pressable

        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
          setIsEditable(true)
        }}
      >
        <Text style={styles.content}>{blogPost.content}</Text>
        <Text style={styles.author}>{blogPost.author}</Text>
        <View style={styles.separator}/>
      </Pressable>
      {isEditable && (
        <Pressable
          onPress={() => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
            setIsEditable(false)
          }}
          style={styles.editable}
        >
          <View style={styles.actionsContainer}>
            <Pressable style={styles.action} onPress={goToPost}  hitSlop={8}>
              <Feather name="eye" size={24} color="green"/>
            </Pressable>
            <Pressable style={styles.action} onPress={() => deleteBlogPost(blogPost.id)} hitSlop={8}>
              <Feather name="trash" size={24} color="red"/>
            </Pressable>
          </View>
        </Pressable>

      )}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 16,
    flex: 1,
  },
  separator: {
    alignSelf: 'center',
    borderBottomColor: '#464646',
    borderBottomWidth: 1,
    width: 50,
  },
  author: {
    alignSelf: 'flex-end',
    color: '#7c7c7c',
    fontSize: 14,
  },
  content: {
    fontSize: 16,
  },
  editable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(215,215,215,0.85)',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  actionsContainer: {
    marginRight: 8,
    flexDirection: 'row',
  },

  action : {
    marginLeft: 16
  }

})

export default withNavigation(BlogRecord)