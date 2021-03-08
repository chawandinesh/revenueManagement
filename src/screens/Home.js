import React from 'react'
import { View, Text } from 'react-native'
import {Icon} from 'react-native-elements'

export default function Home(props) {
    React.useLayoutEffect(() => {
     console.log(props.navigation)
     props.navigation.setOptions({
        // tabBarLabel:'Home',  
        // tabBarIcon:({tintColor})=>(  
        //     <Icon name="ios-home" type="ionicon" color="#f3f" size={25}/>  
        // )  
     })
    }, [props.navigation])
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
