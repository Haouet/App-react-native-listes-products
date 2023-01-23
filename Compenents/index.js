import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import ProductContainer from './ProductContainer'

const Home = () => {
    return (

        <View style={styles.container}>
            <ScrollView >
                <ProductContainer />
                
            </ScrollView>
            
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },

});
export default Home