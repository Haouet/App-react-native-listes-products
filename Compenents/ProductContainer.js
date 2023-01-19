import React, { useState, useEffect } from 'react';
import {  Text, View,ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import Product from './Product'
const products = require('../Data.json')

const ProductContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setData(products)    
    setLoading(false)
    return () => {
      setData([])
    }
  }, [])
  return (
   
    <View >
          <Text style={styles.h1}> Products </Text>
      { loading 
        ? (<ActivityIndicator size="small" color="#0000ff" />) 
        : (
            <View style={{marginTop:100}} >       

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
        backgroundColor: 'red',
        color: 'white',
        alignItems: 'center',
        padding: 10,
        top: 20
    }
})


export default ProductContainer