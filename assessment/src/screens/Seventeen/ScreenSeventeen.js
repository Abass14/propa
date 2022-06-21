import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import AccountCard from '../../components/AccountCard/AccountCard';
import ContactlessCard from '../../components/ContactlessCard/ContactlessCard';
import Container from '../../components/container/Container';
import CustomText from '../../components/CustomText/CustomText';
import BackGroundOne from '../../components/ScreenBackGroundOne/BackGroundOne';
import SvgLoader from '../../components/SvgLoader/SvgLoader';
import { avatar } from '../../constant/avatar';
import { navConstants, svgPath } from '../../constant/constants';
import { ACCOUNTDATA } from '../../data/data';
import { styles } from './styles';

const ScreenSeventeen = ({navigation}) => {
    const { navigate } = navigation;
    const {EIGHTEEN} = navConstants;
    const renderItem = (account) => {
        const acc = account.item
        return (
            <View style={{marginBottom: 10}}>
                <AccountCard 
                    accountTxt={acc.account}
                    cashValue={acc.cash}
                    svgXml={acc.svg}
                    CardNo={acc.cardNo}
                    onPress={() => {
                        navigate(EIGHTEEN, {
                            account: account.item
                        })
                    }}
                />
            </View>
        )
    }
    return (
        <BackGroundOne
            childOne={
                <View style={styles.viewOne}>
                   <View style={styles.header}>
                        <SvgLoader xml={svgPath.OPTIONS_SVG} width={20} height={20} />
                        <SvgLoader xml={avatar} width={40} height={40} />
                   </View>
                   <View style={styles.textView}>
                        <CustomText>
                            THURSDAY, 18 JUNE
                        </CustomText>
                        <CustomText otherStyle={styles.nameTxt}>
                            Welcome back, 
                        </CustomText>
                        <CustomText otherStyle={styles.nameTxt}>
                            Olivia 
                        </CustomText>
                   </View>
                </View>
            }
            childTwo={
                <View style={styles.viewTwo}>
                    <View style={styles.flatlist}>
                        <FlatList 
                            data={ACCOUNTDATA}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                    <ContactlessCard />
                </View>
            }
        />
    );
}

export default ScreenSeventeen
