import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const CreateScreen = () => {
  const [title, setTitle] = useState('')
  return(
    <View>
      <TextInput
        placeholder={'Blog Title'}
        value={title}
        style={styles.titleInput}
        onTextInput={setTitle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleInput: {

  }
})

export default CreateScreen