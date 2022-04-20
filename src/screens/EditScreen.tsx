import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native'
import {useForm} from "react-hook-form";
import {blogPost} from "../types/State";
import {Context} from "../context/BlogProvider";
import TextInputHookForm from "../components/TextInputHookForm/TextInputHookForm";
import {TNavigatiion} from "../types/Common";
import {getBlog} from "../utils/utils";

interface IProps {
  navigation: TNavigatiion
}

const EditScreen = ({navigation}: IProps) => {
  const blogPostId = navigation.getParam('id')
  const [state, {editBlogPost}] = useContext(Context)
  const currentBlog = getBlog(state, blogPostId)
  const {control, handleSubmit, formState: {errors}} = useForm<blogPost>({
    defaultValues: {
      author: currentBlog ? currentBlog.author : '',
      content: currentBlog ? currentBlog.content : '',
      id: currentBlog ? currentBlog.id : 0,
    }
  });
  const onSubmit = (data: blogPost) => {
    editBlogPost(data)
    navigation.goBack()
  };


  return (
    <View style={styles.wrap}>
      <TextInputHookForm
        control={control}
        errorMessage={errors.author?.message}
        name={'author'}
        placeholder={'Blog Author'}
      />
      <TextInputHookForm
        control={control}
        errorMessage={errors.author?.message}
        name={'content'}
        placeholder={'Blog Content'}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Save Blog Post" onPress={handleSubmit(onSubmit)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 8,
  },
  button: {
    paddingVertical: 16,
  },
})


export default EditScreen