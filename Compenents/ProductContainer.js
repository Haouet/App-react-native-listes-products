import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, View, ActivityIndicator, StyleSheet, FlatList, TextInput } from 'react-native';
import Product from './Product'

const baseURL = "https://reqres.in/api/users?page=2";
const ProductContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, onChangeText] = useState('');
  useEffect(() => {

    const fetchData = async () => {

      try {
        const { data: response } = await axios.get(baseURL);
        console.log(response?.data);
        setData(response.data);
        console.log(data);

      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
    // setData(products)    
    // setLoading(false)
    // return () => {
    //   setData([])
    // }
  }, [])
  return (

    <View >

      <Text style={styles.h1}> LISTES users </Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
       
      </View>
      {loading
        ? (<ActivityIndicator size="small" color="#0000ff" />)
        : (
          
          <View style={{ marginTop: 100 }} >
             
            <FlatList
              data={data}
              renderItem={({ item }) => <Product key={item.id} item={item} />}
              keyExtractor={item => item.id}

            />

          </View>
        )
      }
    </View>
  )
}
const styles = StyleSheet.create({

  h1: {

    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'orange',
    color: 'white',
    alignItems: 'center',
    padding: 10,
    top: 100,
    borderRadius: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    top: 100,
  }
})


export default ProductContainer