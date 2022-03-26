import {View, Button, Text, StyleSheet} from 'react-native'
import React, {useState} from 'react'
export default function App() {
  const [name, setName] = useState('');
  const onClickHandler = () => {
    setName ('Loan')
  }
  return(
    <View style = {body}>
      <Text style = {styles.text}>My name is {name}</Text>
     <Button title='Update'         
            onPress = {onClickHandler}></Button>
   </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  text: {
    color: '#00e000',
    fontSize: 25,
    margin: 10,
    textTransform: 'uppercase'
  },
})

const page = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61dafb',
  }
})
const body = StyleSheet.compose(styles.body, page.container);