import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Button
} from 'react-native';

var { width } = Dimensions.get("window");

const ProductCart = (props) => {
    const { email, first_name, last_name, avatar } = props
    return (
        <View style={styles.container}>

            <View style={styles.card}>

                <Image style={styles.image}
                    resizeMode="contain"
                    source={{ uri: avatar ? avatar : 'https://babaali.tn/wp-content/uploads/2022/11/espadrilles-colores-pour-femme-plateforme-a-la-mode-300x300.jpg' }}
                />
                <Text style={styles.title}>
                    {first_name} {last_name}
                </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width - 40,
        height: 80,
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        elevation: 8,
        backgroundColor: 'white'
    },

    card: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 20,

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 5,
        marginTop: 100

    }

})
export default ProductCart;