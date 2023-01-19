import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductContainer from './Compenents/ProductContainer';

const App = () => {


  return (



    <View style={styles.container}>

      <ProductContainer />

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
export default App;
