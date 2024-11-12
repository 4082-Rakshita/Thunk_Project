import { View, Text,FlatList } from 'react-native'
import React from 'react'

interface FlatListProps{
 data:any,
 renderItem:any,

}
const CustomFlatList:React.FC<FlatListProps> = ({data,renderItem}) => {
  return (
   <FlatList
    data={data}
    showsVerticalScrollIndicator={false}
    renderItem={renderItem}
    keyExtractor={(item,index) => index.toString()} 
    ListEmptyComponent={<Text>No items available.</Text>}
   />
  )
}

export default CustomFlatList;