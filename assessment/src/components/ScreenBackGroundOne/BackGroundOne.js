import React from "react";
import { StatusBar, View } from "react-native";
import { colors } from "../../constant/colors";
import { styles } from "./styles";

const BackGroundOne = ({childOne, childTwo, styleOne, styleTwo}) => {

    return (
        <View style={styles.container}>
            <View style={{...styles.viewOne, ...styleOne}}>
                {childOne}
            </View>
            <View style={{...styles.viewTwo, ...styleTwo}}>
                {childTwo}
            </View>
        </View>
    )
}

export default BackGroundOne;