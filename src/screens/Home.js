import React from 'react'
import { View, Text } from 'react-native'
import {Icon} from 'react-native-elements'

export default function Home(props) {
    React.useLayoutEffect(() => {
     props.navigation.setOptions({
     })
    }, [props.navigation])
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
