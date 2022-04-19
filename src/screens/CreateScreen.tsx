import React, {useContext} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Controller, useForm} from "react-hook-form";
import {blogPost} from "../types/State";
import {Context} from "../context/BlogProvider";
import {withNavigation} from "react-navigation";
import {TNavigatiion} from "../types/Common";

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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={'Blog Author'}
            style={[styles.input,  errors.author ? styles.errorInput: {}]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="author"
      />
      {errors.author && <Text style={styles.error}>Author name is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 500,
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={'Blog Content'}
            multiline={true}
            numberOfLines={4}
            style={[styles.input, styles.content,  errors.content ? styles.errorInput: {}]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="content"
      />
      {errors.content && <Text style={styles.error}>Content is required. Limit is 500 symbols</Text>}


      <Button title="Add Blog Post" onPress={handleSubmit(onSubmit)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 8,
  },
  input: {
    borderWidth: 1,
    marginVertical: 4,
    padding: 8,
    borderRadius: 8,
    borderColor: '#7c7c7c',
  },
  content: {
    textAlignVertical: 'top'
  },

  error: {
    textAlign: 'right',
    color: 'red',
    fontSize: 10,
  },

  button: {
    paddingVertical: 16,

  },

  errorInput: {
    borderColor: 'red'
  }


})

export default withNavigation(CreateScreen)