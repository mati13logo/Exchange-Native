import { View, Text, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CoinComponent from './Components/CoinComponent'

const App = () => {
  const [coins, setCoins] = useState([])
  const getInfo = async () => {
    let res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    res = res.data
    setCoins(res)
  }

  useEffect(() => {
    getInfo()
  }, [])
  return (
    <View style={style.container}>
      <StatusBar />
      <View style={style.head}>
        <Text style={style.title}>Exchange Matias</Text>
        <TextInput style={style.search}></TextInput>
      </View>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          return <CoinComponent item={item} />
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor:'#121212',
    height: 100,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    marginTop: 10,
    color: '#fff'
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom:10,
    
  },
  search: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    textAlign: 'center',
    width:'40%',
    textAlign:'center',
  },
  
  
})

export default App