import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useForm} from "react-hook-form";
import {blogPost} from "../types/State";
import {Context} from "../context/BlogProvider";
import {withNavigation} from "react-navigation";
import {TNavigatiion} from "../types/Common";
import TextInputHookForm from "../components/TextInputHookForm/TextInputHookForm";

interface IProps {
  navigation: TNavigatiion
}

const CreateScreen = ({navigation}: IProps) => {
  const {control, handleSubmit, formState: {errors}} = useForm<blogPost>();
  const onSubmit = (data: blogPost) => {
    addBlogPost(data)
    navigation.goBack()
  };
  const [, {addBlogPost}] = useContext(Context)

  return (
    <View style={styles.wrap}>
      <TextInputHookForm
        control={control}
        errorType={errors.author?.type}
        name={'author'}
        placeholder={'Blog Author'}
      />
      <TextInputHookForm
        control={control}
        errorType={errors.content?.type}
        name={'content'}
        placeholder={'Blog Content'}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Add Blog Post" onPress={handleSubmit(onSubmit)}/>
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

export default withNavigation(CreateScreen)