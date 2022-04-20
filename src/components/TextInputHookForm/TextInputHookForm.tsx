import React from 'react'
import {StyleSheet, Text, TextInput} from 'react-native'
import {Control, Controller} from "react-hook-form";
import {blogPost} from "../../types/State";

interface IProps {
  control: Control<blogPost>
  name: string,
  errorMessage: string | undefined,
  placeholder: string,
  multiline?: boolean
  numberOfLines?:number
}

const TextInputHookForm = ({control, errorMessage,placeholder, name, multiline,  numberOfLines}:IProps) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={placeholder}
            style={[styles.input,  errorMessage ? styles.errorInput: {}, styles.getTextAlignVertical(multiline)]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={multiline}
            numberOfLines={numberOfLines}
          />
        )}
        name={name}
      />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </>
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
  errorInput: {
    borderColor: 'red'
  },
  // @ts-ignore
  getTextAlignVertical: (multiline: boolean) => ({textAlignVertical: multiline? 'top' : 'center'}),

})

export default TextInputHookForm