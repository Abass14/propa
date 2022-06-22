import React, { Component, useState } from 'react';
import { View, Text, Switch } from 'react-native';
import CustomText from '../../components/CustomText/CustomText';
import DeatilsCard from '../../components/DetailCard/DetailCard';
import Header from '../../components/Header/Header';
import BackGroundOne from '../../components/ScreenBackGroundOne/BackGroundOne';
import SvgLoader from '../../components/SvgLoader/SvgLoader';
import TransactionCard from '../../components/TransactionCard/TransactionCard';
import { colors } from '../../constant/colors';
import { svgPath } from '../../constant/constants';
import { DETAIL_DATA, DETAIL_TRANSACTION_DATA, TRANSACTIONDATA } from '../../data/data';
import { styles } from './styles';

const ScreenNineteen = ({route, navigation}) => {
    const {transaction} = route.params;
    const {MOBILE_OUTLINE} = svgPath;
    const [isEnabled, setIsEnabled] = useState(false)
    return (
        <BackGroundOne 
            styleOne={{
                backgroundColor: colors.pink_purple
            }}
            styleTwo={{
                flex: 6
            }}
            childOne={
                <Header 
                    goBack={() => navigation.goBack()}
                    color={colors.white}
                />
            }
            childTwo={
                <View style={styles.container}>
                    <View style={{flex: 7, backgroundColor: colors.white, paddingHorizontal: 20, justifyContent: 'space-between'}}>
                        <View style={styles.mobileCircle}>
                            <SvgLoader xml={transaction.svg} width={85} height={85} />
                        </View>
                        
                        <View style={{}}>
                            <View style={{marginTop: 30}}>
                                <CustomText>5 JULY 2019  11:50 AM</CustomText>
                                <CustomText otherStyle={{fontSize: 22, color: colors.purple}}>{transaction.data.name}</CustomText>
                            </View>
                            <View>
                                {DETAIL_DATA.map(trans => {
                                    return (
                                        <DeatilsCard 
                                            key={trans.id}
                                            name={trans.name}
                                            svg={trans.svg}
                                        />
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', marginStart: 20}}>
                        <CustomText>USER HISTORY</CustomText>
                    </View>
                    <View style={{flex: 5, backgroundColor: colors.white, justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20}}>
                        <View>
                            <CustomText otherStyle={{fontSize: 22, color: colors.purple}}>You and {transaction.data.name}</CustomText>
                        </View>
                        <View>
                            {DETAIL_TRANSACTION_DATA.map((details) => {
                                return (
                                    <DeatilsCard 
                                        key={details.id}
                                        name={details.name}
                                        amount={details.amount}
                                        svg={details.svg}
                                        num={details.num}
                                    />
                                )
                            })}
                        </View>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', marginStart: 20}}>
                        <CustomText>SUBSCRIPTION</CustomText>
                    </View>
                    <View style={{flex: 1.5, backgroundColor: colors.white, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between'}}>
                        <View style={{justifyContent: 'center'}}>
                            <CustomText otherStyle={{color: colors.purple}}>Repeating Payment</CustomText>
                            <CustomText otherStyle={{fontSize: 11}}>We’ll predict this for you in summary</CustomText>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <Switch 
                                trackColor={{ false: "gray", true: "green" }}
                                thumbColor={isEnabled ? "white" : "#FFFFFF"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setIsEnabled(prev => !prev)}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
            }
        />
    );
}

export default ScreenNineteen
