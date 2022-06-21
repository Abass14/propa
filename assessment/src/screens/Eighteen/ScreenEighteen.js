import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import CustomText from '../../components/CustomText/CustomText';
import BackGroundOne from '../../components/ScreenBackGroundOne/BackGroundOne';
import SvgLoader from '../../components/SvgLoader/SvgLoader';
import Swipeable from '../../components/SwipeableAccount/Swipeable';
import { navConstants, svgPath } from '../../constant/constants';
import { styles } from './styles';
import {Icon} from 'react-native-elements'
import { colors } from '../../constant/colors';
import Cash from '../../components/Cash/Cash';
import TransactionCard from '../../components/TransactionCard/TransactionCard';
import { TRANSACTIONDATA } from '../../data/data';

const ScreenEighteen = ({route, navigation}) => {
    const { navigate } = navigation;
    const {account} = route.params;
    const {TRANSFER_ICON, PAY_ICON, CARD_ICON} = svgPath;

    const renderTransaction = ({item}) => {
        const transaction = item;
        return (
            <View>
                <TransactionCard 
                    name={transaction.data.name}
                    type={transaction.data.type}
                    paid={transaction.data.paid}
                    svg={transaction.svg}
                    amount={transaction.amount}
                    onPress={() => navigate(navConstants.NINETEEN, {
                        transaction
                    })}
                />
            </View>
        )
    }

    return (
        <BackGroundOne 
            styleTwo={styles.styleTwo}
            childOne={
                <View style={styles.childOne}>
                    <Swipeable 
                        acc={account}
                        goBack={() => navigation.goBack()}
                    />
                </View>
            }
            childTwo={
                <View style={styles.childOne}>
                    <View style={styles.childViews}>
                        <View style={styles.iconView}>
                            <View>
                                <View style={styles.iconCircle}>
                                    <SvgLoader xml={TRANSFER_ICON} width={20} height={20} />
                                </View>
                                <CustomText otherStyle={{textAlign: 'center'}}>Transfer</CustomText>
                            </View>
                            <View>
                                <View style={styles.iconCircle}>
                                    <SvgLoader xml={PAY_ICON} width={20} height={20} />
                                </View>
                                <CustomText otherStyle={{textAlign: 'center'}}>Pay</CustomText>
                            </View>
                            <View>
                                <View style={styles.iconCircle}>
                                    <SvgLoader xml={CARD_ICON} width={20} height={20} />
                                </View>
                                <CustomText otherStyle={{textAlign: 'center'}}>Card</CustomText>
                            </View>
                        </View>
                        <View style={styles.moneyinCard}>
                            <View style={styles.thrityDays}>
                                <View></View>
                                <CustomText otherStyle={{color: colors.pink}}>Last 30 days</CustomText>
                                <Icon 
                                    type='material'
                                    name='chevron-right'
                                    size={20}
                                    color={colors.pink}
                                />
                            </View>
                            <View style={styles.money}>
                                <View style={{justifyContent: 'center'}}>
                                    <Cash value={"5,250.00"} style={{color: 'green', fontSize: 28}} />
                                    <CustomText otherStyle={{textAlign: 'center'}}>Money in</CustomText>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                    <View style={{width: 8, backgroundColor: 'green', height: 30, marginEnd: 5}}></View>
                                    <View style={{width: 8, backgroundColor: colors.gray, height: 50, marginStart: 5}}></View>
                                </View>
                                <View style={{justifyContent: 'center'}}>
                                    <Cash value={"2,250.96"} style={{color: colors.gray, fontSize: 28}} />
                                    <CustomText otherStyle={{textAlign: 'center'}}>Money in</CustomText>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.childOne, {padding: 5, justifyContent: 'center'}]}>
                        <CustomText>WED, 2 JULY</CustomText>
                    </View>
                    <View style={styles.childViews}>
                        <FlatList 
                            renderItem={renderTransaction}
                            data={TRANSACTIONDATA}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            }
        />
    );
}

export default ScreenEighteen
