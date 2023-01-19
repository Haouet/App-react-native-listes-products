import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native';
import ProductCart from './ProductCart';
var { width } = Dimensions.get("window");
const Product = (props) => {
    const {item}= props
  return (

      <TouchableOpacity style={{ width: '50%' }}>
          <View style={{
              width: width  - 10 ,
              backgroundColor: '#DCDCDC'
          }}
          >
              <ProductCart {...item} />
          </View>

      </TouchableOpacity>

    
  )
}

export default Product