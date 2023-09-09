import { View, Text,TextInput,Button } from 'react-native'
import React from 'react'

const IndexScreen = ({navigation,route}) => {


    //Post updated do something with 'route.params.post'
    React.useEffect(()=>{
        if(route.params?.post){


        }
    },[route.params?.post])

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button
        title = "CREATE POST"
        onPress={() => navigation.navigate('CreatePost')}
        />
        <Text style={{margin:10}}>Post: {route.params?.post}</Text>
      
    </View>
  )
}

export default IndexScreen