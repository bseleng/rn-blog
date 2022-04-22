import React from 'react'
import {StyleSheet, Text, TextInput} from 'react-native'
import {Control, Controller} from "react-hook-form";
import {blogPost} from "../../types/State";

interface IProps {
  control: Control<blogPost>
  name: Exclude<keyof blogPost, 'id'>,
  errorType: string | undefined,
  placeholder: string,
  multiline?: boolean
  numberOfLines?: number
}

const TextInputHookForm = ({control, errorType, placeholder, name, multiline, numberOfLines}: IProps) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 2,
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={placeholder}
            style={[styles.input, styles.getTextAlignVertical(multiline), errorType ? styles.errorInput : {}]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={multiline}
            numberOfLines={numberOfLines}
          />
        )}
        name={name}
      />
        {Boolean(errorType) && <Text style={styles.error}>{name + ': ' + errorType} </Text>}
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
  getTextAlignVertical: (multiline: boolean) => ({textAlignVertical: multiline ? 'top' : 'center'}),

})

export default TextInputHookForm