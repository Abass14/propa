import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../constant/colors";
import CustomText from "../CustomText/CustomText";


const Hyperlink = ({text, onPress, textStyle}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <CustomText otherStyle={{color: colors.pink, ...textStyle}}>{text}</CustomText>
        </TouchableOpacity>
    )
}

export default Hyperlink