import { View, StyleSheet, Text, TextInput, Pressable, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
export default function App() {
  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
      // Alert.alert(
      //   'Warning',
      //   'Phải nhập tên dài hơn 3 kí tự', [
      //   {
      //     text: 'Do not show again',
      //     onPress: () => console.warn('Do not show Pressed!')
      //   },
      //   {
      //     text: 'Cancel',
      //     onPress: () => console.warn('Cancel Pressed!')
      //   },
      //   {
      //     text: 'OK',
      //     onPress: () => console.warn('OK Pressed!')
      //   },
      // ],
      //   {
      //     cancelable: true,
      //     onDismiss: () => console.warn('Alert dismissed!')
      //   })
      ToastAndroid.showWithGravityAndOffset(
        'Phải nhập tên dài hơn 3 kí tự',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        10, 10
      )
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Nhập tên của bạn:
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => SetName(value)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {submitted ?
        <Text style={styles.text}>
          You are registered as {name}
        </Text>
        :
        null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 25,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});
