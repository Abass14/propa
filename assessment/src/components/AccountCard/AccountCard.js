import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constant/colors";
import { svgPath } from "../../constant/constants";
import Cash from "../Cash/Cash";
import CustomText from "../CustomText/CustomText";
import SvgLoader from "../SvgLoader/SvgLoader";
import { styles } from "./styles";

const AccountCard = ({accountTxt, CardNo, cashValue, svgXml, onPress}) => {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={1}
        >
            <View style={styles.viewOne}>
                <CustomText>{accountTxt}</CustomText>
                <CustomText>{CardNo}</CustomText>
                <Cash value={cashValue} style={{fontSize: 28, color: colors.purple}}/>
            </View>
            <View>
                <SvgLoader xml={svgXml} width={40} height={40} />
            </View>
        </TouchableOpacity>
    )
}

export default AccountCard;