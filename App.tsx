import { View, StyleSheet, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
export default function Flex() {
  const [name, SetName] = useState('');
  const [pass, SetPass] = useState('');
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Tên đăng nhập:
      </Text>
      <TextInput
        style={styles.input}
        keyboardType = 'email-address'
        maxLength = {50}
        placeholder='Nhập tên đăng nhập'
        onChangeText={(value) => SetName(value)}
      />
      <Text style={styles.text}>
        Mật khẩu:
      </Text>
      <TextInput
        style={styles.input}
        maxLength = {50}
        secureTextEntry
        placeholder='Nhập mật khẩu'
        onChangeText={(value) => SetPass(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});