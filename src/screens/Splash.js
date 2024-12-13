import { StackActions } from "@react-navigation/native"
import React, {useState, useEffect} from "react"
import {View, Text} from 'react-native'

const Splash = ({n}) => {
    useEffect (() => {
        const interval = setTimout(() => {
            navigation.dispatch(StackActions.replace('Home'))
        }, 2000)
        return () => clearTimeout(interval)
    }, [])
    
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default Splash