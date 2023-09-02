import { View, Text } from 'react-native'
import React from 'react'

const ThirdPage = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is Second Page of the App</Text>
        
    
        <Button
      title = "Go back"
      onPress={()=>navigation.goBack()}
      />
    
      <Button
      title="GO TO SECONDPAGE"
      onPress={()=>navigation.navigate('SECOND')}
      />  
      <Button
      title="GO TO FIRST PAGE"
      onPress={()=>navigation.navigate('FIRST')}    
      />
      </View>
      )
    }

export default ThirdPage