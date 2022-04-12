import React, {useContext} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {Context} from '../context/BlogProvider';
import BlogRecord from "../components/BlogRecord/BlogRecord";

const IndexScreen = () => {
  const [state, {addTestData}] = useContext(Context)
  return(
    <View style={styles.wrap}>
      <Button
        title={'add Test Post'}
        onPress={() => addTestData()}
      />
      {state.blogPosts && state.blogPosts.length > 0 &&(
        <FlatList
          keyExtractor={(blog, index)=> index+blog.author}
          data={state.blogPosts}
          renderItem={({item}) => <BlogRecord content={item.content} author={item.author} id={item.id} />}
        />

      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16
  },
})

export default  IndexScreen