import React, {useContext} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import BlogContext from "../context/BlogProvider";
import ActionTypes from "../context/ActionTypes";

const IndexScreen = () => {
  const [state, dispatch] = useContext(BlogContext)
  return(
    <View style={styles.wrap}>
      <Text style={styles.title}>Index Screen</Text>
      <Button
        title={'add Test Post'}
        onPress={()=> dispatch({type: ActionTypes.ADD_POST, payload:{author: 'Bogdan', content: 'Never intepreter, once teacher, always a programmer'}})}
      />
      {state.blogPosts && state.blogPosts.length > 0 &&(
        <FlatList
          keyExtractor={(blog, index)=> index+blog.author}
          data={state.blogPosts}
          renderItem={({item}) => {
            return (
              <View style={styles.item}>
                <Text style={styles.content}>{item.content}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <View style={styles.separator}/>
              </View>
            )
          }}
        />

      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16
  },

  title: {
    fontSize: 24
  },
  item: {
    marginVertical: 8,

  },separator: {
    alignSelf: 'center',
    borderBottomColor: '#464646',
    borderBottomWidth: 1,
    width: 50,
  },
  author: {
    alignSelf: 'flex-end',
    color: '#7c7c7c',
    fontSize:14,
  },
  content: {
    fontSize: 16,
  },
})

export default  IndexScreen