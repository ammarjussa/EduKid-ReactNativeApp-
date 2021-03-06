import React from 'react';
import {View,Text,TouchableHighlight,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import { AuthSession } from 'expo';


const PlayerButton = (props) => (
    <View
    style={{flex:1.5}}
    onTouchStart={props.myPress}
    >
        <TouchableHighlight 
            onPressIn={props.myPress}
            underlayColor={props.feedbackColor}
            style={{flex:1.5,backgroundColor:props.feedbackColor, borderRadius: 15}}
        >
            <Text style={mystyles.playerId}>{props.playerId}</Text>
        </TouchableHighlight>
    </View>
)

export default PlayerButton


mystyles = StyleSheet.create({
    
    playerId: {
            color:'white',
            fontWeight:'bold',
            fontSize:30,
            marginTop: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto'

        }
})