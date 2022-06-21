import React from "react";
import { Text } from "react-native";
import { colors } from "../../constant/colors";

const CustomText = ({size=14, color='gray', children, otherStyle}) => {

    return (
        <Text style={{fontSize: size, color: color, ...otherStyle}}>{children}</Text>
    )
}

export default CustomText;