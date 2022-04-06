import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

const IndexScreen = () => {
  return(
    <View>
      <Text style={styles.title}>Index Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  }
})

export default  IndexScreen