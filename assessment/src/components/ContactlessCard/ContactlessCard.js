import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { card } from "../../constant/card";
import { colors } from "../../constant/colors";
import CustomText from "../CustomText/CustomText";
import SvgLoader from "../SvgLoader/SvgLoader";
import { styles } from "./styles";

const ContactlessCard = () => {

    return (
        <LinearGradient 
            start={{x:0, y:0}} 
            end={{x:1, y:0}} 
            colors={[colors.dark_pink, colors.light_purple]} 
            style={styles.container}
        >
            <SvgLoader xml={card} width={70} height={100} />
            <View style={styles.textContainer}>
                <CustomText otherStyle={styles.text}>Get your contactless card</CustomText>
                <CustomText otherStyle={{...styles.text, fontSize: 11}}>Use it to push services on the app</CustomText>
            </View>
            <View style={styles.clear}>
                <Icon
                    type="material"
                    size={10}
                    name="clear" 
                />
            </View>
        </LinearGradient>
    )
}

export default ContactlessCard;