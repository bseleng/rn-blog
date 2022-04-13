import React, {useContext, useState} from 'react';
import {Feather} from "@expo/vector-icons";
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {blogPost} from "../../types/State";
import * as Haptics from 'expo-haptics';
import {Context} from "../../context/BlogProvider";

const BlogRecord = ({content, author, id}: blogPost) => {
  const [isEditable, setIsEditable] = useState(false)
  const [state, {deleteBlogPost}] = useContext(Context)

  return (
    <View        style={styles.item} >
      <Pressable

        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
          setIsEditable(true)
        }}
      >
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.author}>{author}</Text>
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
            <TouchableOpacity onPress={() => deleteBlogPost(id)}>
              <Feather name="trash" size={24} color="red"/>
            </TouchableOpacity>
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
    marginRight: 8
  }
})

export default BlogRecord