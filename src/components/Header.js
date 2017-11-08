import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () =>{
    return(
        <View style={headerContainer}> 
            {/* maybe temp view*/}           
             <View>
                <Text style={header}>
                    Crypto Currency App
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        display: "flex",
        marginTop: 55,
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
    }
})

const { headerContainer, header } = styles;

export default Header;