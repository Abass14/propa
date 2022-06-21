import React from "react";
import { TouchableOpacity, View } from "react-native";
import { avatarII } from "../../constant/avatarII";
import { colors } from "../../constant/colors";
import Cash from "../Cash/Cash";
import CustomText from "../CustomText/CustomText";
import SvgLoader from "../SvgLoader/SvgLoader";
import { styles } from "./styles";
import {Icon} from 'react-native-elements'

const DeatilsCard = ({paid, svg, name, type, amount, onPress, num}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgLoader xml={svg} width={20} height={20} />
                <View style={{marginStart: 10}}>
                    {name && <CustomText otherStyle={{fontSize: 15, color: colors.purple}}>{name}</CustomText>}
                    {type && <CustomText otherStyle={{fontSize: 11}}>{type}</CustomText>}
                </View>
            </View>
            <View>
                {amount ? (
                    <Cash value={amount} style={{fontSize: 17, color: colors.purple}} />
                ) : num ? <CustomText otherStyle={{color: colors.purple}}>{num}</CustomText> : 
                <Icon name="chevron-right" type="material" size={20} color={colors.gray} />}
            </View>
        </TouchableOpacity>
    )
}

export default DeatilsCard;