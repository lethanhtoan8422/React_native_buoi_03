import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Home({route, navigation}) {
    const [stars, setStars] = useState([1, 2, 3, 4, 5])
    const [nameProduct, setProduct] = useState("Điện Thoại Vsmart Joy 3 - Hàng chính hãng")
    const [colorProduct, setColorProduct] = useState({
        color : 'blue',
        path : require("./assets/colorPhone/colorBlue.png")
    })

    let handleChangeColor = (color) => {
        if(color === "blue"){
            setColorProduct({
                color : "blue",
                path : require("./assets/colorPhone/colorBlue.png")
            })
        }
        else if(color === "black"){
            setColorProduct({
                color : "black",
                path : require("./assets/colorPhone/colorBlack.png")
            })
        }
        else if(color === "red"){
            setColorProduct({
                color : "red",
                path : require("./assets/colorPhone/colorRed.png")
            })
        }
        else if(color === "white"){
            setColorProduct({
                color : "white",
                path : require("./assets/colorPhone/colorWhite.png")
            })
        }
    }

    let handlePressChooseColor = () => {
        navigation.navigate("ColorPage", {
            colorCurrent : colorProduct.color,
            handleChangeColor : handleChangeColor
        })
    }

    let handlePressBuyProduct = () => {
        alert(`Mua Sản Phẩm : ${nameProduct} (${colorProduct.color})`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewImage}>
                <Image resizeMode='contain' source={colorProduct.path} style={styles.imagePhone} />
            </View>
            <Text style={{ fontSize: '15px', fontWeight: '400' }}>{nameProduct}</Text>
            <View style={styles.viewStars}>
                <View style={styles.stars}>
                    {
                        stars.map(star => (
                            <Icon name='star' size={30} color={'#E0E41A'} style={{ marginRight: '5px' }} />
                        ))
                    }
                </View>
                <Text style={{ fontSize: '15px', fontWeight: '400' }}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.viewPrices}>
                <Text style={{ fontSize: '18px', fontWeight: '700' }}>1.790.000 đ</Text>
                <Text style={{
                    fontSize: '15px', fontWeight: '700',
                    textDecorationLine: 'line-through',
                    color: 'rgba(0,0,0, 0.58)',
                    marginLeft: '50px'
                }}>1.790.000 đ</Text>
            </View>
            <View style={styles.question}>
                <Text style={{ fontSize: '12px', fontWeight: '700', color: '#FA0000', marginRight: '5px' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Icon name='question' size={15} style={{ borderWidth: '1px', borderRadius: '50%', paddingHorizontal: '3px' }} />
            </View>
            <TouchableWithoutFeedback onPress={handlePressChooseColor}>
                <View style={styles.viewChooseColors}>
                    <Text style={{ fontSize: '15px', fontWeight: '400' }}>4 MÀU-CHỌN MÀU</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={handlePressBuyProduct}>
                <View style={styles.viewPurchase}>
                    <Text style={{ fontSize: '20px', fontWeight: '700', color : 'white' }}>CHỌN MUA</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: '20px'
    },
    viewImage: {
        width: '100%',
        height: '55%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePhone: {
        width: '60%',
        height: '100%',
    },
    viewStars: {
        width: '100%',
        height : '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewPrices: {
        width: '100%',
        height : '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    question: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    viewChooseColors : {
        width: '100%',
        height : '35px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth : '1px',
        borderColor: 'rgba(0,0,0,0.46)',
        borderRadius : '10px',
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    viewPurchase : {
        width: '100%',
        height : '44px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#CA1536',
        borderRadius : '10px',
        marginTop : '50px',
        marginBottom : '10px',
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 3,
    }
});
