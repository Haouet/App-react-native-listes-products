import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Button
} from 'react-native';

var {width} = Dimensions.get("window");

const ProductCart = (props) => {
    const {title,price,desc,img} = props
  return (
    <View style={styles.container}>
        <Image style={styles.image}
        resizeMode="contain"
        source={{uri: img ? img :  'https://babaali.tn/wp-content/uploads/2022/11/espadrilles-colores-pour-femme-plateforme-a-la-mode-300x300.jpg'}}
        />
        <View style={styles.card}/>
        <Image></Image>
        <Text style={styles.title}>
            {title.lenght > 15 ? title.substring(0, 15 - 3)
             + '...' : title}
        </Text>
        <Text style={styles.price}>${price}</Text>
        
        
    </View>
  )
}
const styles = StyleSheet.create({
container: {
    width: width - 40,
    height: width - 130,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white'
},
image: {
    width: width,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position:'absolute',
    padding: 10,
    top: 20
},
card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor:'transparent',
    width: width / 2 - 20 - 10,

},
title: {
   fontWeight: 'bold',
   fontSize: 14,
   textAlign: 'center',
   top: 80
},
price: {
   
   fontSize: 20, 
   color: 'orange',
    marginTop: 20
}

})
export default ProductCart;