import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const PageChooseColor = ({route, navigation}) => {
    const [colorProduct, setColorProduct] = useState(require("./assets/colorPhone/colorBlue.png"))
    const [colorsChoose, setColorsChoose] = useState([
        {
            id : 'white',
            color : '#C5F1FB'
        },
        {
            id : 'red',
            color : '#F30D0D'
        },
        {
            id : 'black',
            color : '#000000'
        },
        {
            id : 'blue',
            color : '#234896'
        }
    ])
    const [colorsChosen, setColorsChosen] = useState("blue")
    useEffect(() => {
        const {colorCurrent} = route.params
        if(colorCurrent === "blue"){
            setColorProduct(require("./assets/colorPhone/colorBlue.png"))
        }
        else if(colorCurrent === "black"){
            setColorProduct(require("./assets/colorPhone/colorBlack.png"))
        }
        else if(colorCurrent === "red"){
            setColorProduct(require("./assets/colorPhone/colorRed.png"))
        }
        else if(colorCurrent === "white"){
            setColorProduct(require("./assets/colorPhone/colorWhite.png"))
        }
    },[])

    let handlePressChooseColor = (color) => {
        setColorsChosen(color)
        if(color === "blue"){
            setColorProduct(require("./assets/colorPhone/colorBlue.png"))
        }
        else if(color === "black"){
            setColorProduct(require("./assets/colorPhone/colorBlack.png"))
        }
        else if(color === "red"){
            setColorProduct(require("./assets/colorPhone/colorRed.png"))
        }
        else if(color === "white"){
            setColorProduct(require("./assets/colorPhone/colorWhite.png"))
        }
    }

    let handlePressBtnChosenColor = () => {
        const {handleChangeColor} = route.params
        handleChangeColor(colorsChosen)
        navigation.navigate("Home")
    }
  return (
    <View style={styles.container}>
      <View style={styles.viewProduct}>
        <Image resizeMode='contain' source={colorProduct} style={styles.imagePhone}/>
        <Text style={styles.nameProduct}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style={styles.viewColors}>
        {
            colorsChoose.map(o => (
                <TouchableWithoutFeedback key={o.id} onPress={() => handlePressChooseColor(o.id)}>
                    <View style={{width : '70px', height : '70px'}}>
                        <Pressable style={{width : '100%', height : '100%', backgroundColor : o.color}}/>
                    </View>
                </TouchableWithoutFeedback>
            ))
        }
        <TouchableWithoutFeedback onPress={handlePressBtnChosenColor}>
            <View style={styles.viewBtnChooseColor}>
                <Text style={styles.txtBtnChooseColor}>XONG</Text>
            </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default PageChooseColor

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    viewProduct: {
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
    },
    imagePhone : {
        width : '50%',
        height : '100%',
    },
    nameProduct : {
        fontSize : '18px',
        fontWeight : 'bold'
    },
    viewColors: {
        width: '100%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems : 'center',
        backgroundColor : '#C4C4C4'
    },
    viewBtnChooseColor : {
        width: '325px',
        height : '45px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems : 'center',
        borderWidth : '1px',
        borderColor : '#CA1536',
        borderRadius : '10px',
        backgroundColor : 'rgba(25, 82, 226, 0.58)'
    },
    // txtBtnChooseColor : {
    //     width : '100%'
    // }
})