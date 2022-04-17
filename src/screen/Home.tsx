import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, Alert, FlatList } from "react-native";
import GlobalStyle from "../utils/GlobalStyle";
// import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from "react-redux";
import { setName, setAge, getCities } from "../redux/actions";

export default function Home({ navigation, route }) {
  const { name, age, cities } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

  useEffect(() => {
    getData();
    dispatch(getCities());
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
          setAge(user.Age);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      try {
        var user = {
          Name: name,
        };
        await AsyncStorage.mergeItem("UserData", JSON.stringify(user));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>
        Welcome {name} !
      </Text>
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.country}</Text>
            <Text style={styles.subtitle}>{item.city}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                Your age is {age}
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
            />
            <CustomButton
                title='Update'
                color='#ff7f00'
                onPressFunction={updateData}
            />
            <CustomButton
                title='Remove'
                color='#f40100'
                onPressFunction={removeData}
            />
            <CustomButton
                title='Increase Age'
                color='#0080ff'
                onPressFunction={()=>{dispatch(increaseAge())}}
            /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#cccccc",
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    margin: 10,
    color: "#999999",
  },
});
