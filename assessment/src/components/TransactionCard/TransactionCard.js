import React from "react";
import { TouchableOpacity, View } from "react-native";
import { avatarII } from "../../constant/avatarII";
import { colors } from "../../constant/colors";
import Cash from "../Cash/Cash";
import CustomText from "../CustomText/CustomText";
import SvgLoader from "../SvgLoader/SvgLoader";
import { styles } from "./styles";

const TransactionCard = ({paid, svg, name, type, amount, onPress}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgLoader xml={svg} width={40} height={40} />
                <View style={{marginStart: 10}}>
                    <CustomText otherStyle={{fontSize: 15, color: colors.purple}}>{name}</CustomText>
                    <CustomText otherStyle={{fontSize: 11}}>{type}</CustomText>
                </View>
            </View>
            <View>
                <Cash value={amount} style={{fontSize: 17, color: paid ? 'green' : colors.gray}} />
            </View>
        </TouchableOpacity>
    )
}

export default TransactionCard;