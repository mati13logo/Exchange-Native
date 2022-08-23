import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CoinComponent = ({ item }) => {
    return (
        <View style={style.container}>
            <View>
            <Text style={style.text}>{item.market_cap_rank}</Text>
            <Image
                style={style.image}
                source={{ uri: item.image }}
            />
            <Text style={style.text}>{item.name}</Text>
            <Text style={style.text}>{item.price_change_percentage_24h}</Text>

            </View>
            <Text style={style.text}>{item.current_price}</Text>
            <Text style={style.text}>{item.market_cap}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    text: {
        color: '#ffffff',
    },
    image:{
        width: 30,
        height: 30,
    },
})

export default CoinComponent