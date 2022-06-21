import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import {Icon} from 'react-native-elements'
import { colors } from "../../constant/colors";
import CustomText from "../CustomText/CustomText";
import Hyperlink from "../HyperLink/Hyperlink";


const Header = ({account, cardNo, style, goBack, color}) => {

    return (
        <View style={{...styles.container, ...style}}>
            <Icon 
                type="material"
                name="arrow-back"
                size={25}
                color={color || colors.pink}
                onPress={goBack}
            />

            <View style={{marginLeft: 30}}>
                {account && <CustomText otherStyle={styles.text}>{account}</CustomText>}
                {cardNo && <CustomText otherStyle={styles.text}>{cardNo}</CustomText>}
            </View>

            <Hyperlink 
                text={"Options"}
                onPress={() => {}}
                textStyle={{color: color || colors.pink}}
            />
        </View>
    )
}

export default Header