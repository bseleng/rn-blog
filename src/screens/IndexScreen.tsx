import React, {useContext} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {Context} from '../context/BlogProvider';
import BlogRecord from "../components/BlogRecord/BlogRecord";
import {TNavigatiion} from "../types/Common";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";

interface IProps {
  navigation: TNavigatiion
}

const IndexScreen = () => {
  const [state, {addTestData}] = useContext(Context)
  return(
    <View style={styles.wrap}>
      <Button
        title={'add Test Post'}
        onPress={() => addTestData()}
      />
      {state.blogPosts && state.blogPosts.length > 0 &&(
        <View style={styles.flatListWrap}>
          <FlatList
            keyExtractor={(blog)=> String(blog.id)}
            data={state.blogPosts}
            renderItem={({item}) => <BlogRecord blogPost={item}/>}
          />
        </View>
      )}
    </View>
  )
}

IndexScreen.navigationOptions = ({navigation}:IProps) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')} >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16,
    flex: 1,
    paddingBottom: 16
  },
  flatListWrap: {
    flex: 1,
  },
  navIcon: {
    marginRight: 18,
  }
})

export default  IndexScreen