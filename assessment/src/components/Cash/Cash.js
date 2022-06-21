import React from "react";
import { Text } from "react-native";

const Cash = ({value, style, otherProps}) => {
    return (
        <Text style={style}>{`₦${value}`}</Text>
    )
}

export default Cash;