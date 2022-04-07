import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native'
import BlogContext from "../context/BlogProvider";

const IndexScreen = () => {
  const context = useContext(BlogContext)
  return(
    <View>
      <Text style={styles.title}>Index Screen {context ? context.name : ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  }
})

export default  IndexScreen