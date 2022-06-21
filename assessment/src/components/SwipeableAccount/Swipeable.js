import React, { useState } from "react";
import { Platform, View } from "react-native";
import PagerView from "react-native-pager-view";
import { colors } from "../../constant/colors";
import { ACCOUNTDATA } from "../../data/data";
import Cash from "../Cash/Cash";
import Header from "../Header/Header";

const Swipeable = ({acc, goBack}) => {
    let countIndex = acc.index
    const indicator = (index) => {
        return acc.index === index
    }
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <PagerView 
                initialPage={acc.index}
                style={{
                    flex: 1,
                    marginTop: -40,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                transitionStyle="scroll"
                showPageIndicator={true}
            >
                {ACCOUNTDATA.map((account) => {
                    return (
                        <View key={account.id} style={{width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
                            <Header
                                account={account.account}
                                cardNo={account.cardNo}
                                style={{marginBottom: 20}}
                                goBack={goBack}
                            />
                            <Cash value={account.cash} style={{fontSize: 28, color: colors.white}} />
                        </View>
                    )
                })}
            </PagerView>
            {Platform.OS == 'android' && (
                <View style={{flexDirection: 'row', alignSelf: 'center', width: 100, justifyContent: 'space-between', marginBottom: 5}}>
                    <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: indicator(0) ? colors.white : colors.pink}}>
                    </View>
                    <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: indicator(1) ? colors.white : colors.pink}}>
                    </View>
                    <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: indicator(2) ? colors.white : colors.pink}}>
                    </View>
                </View>
            )}
        </View>
    )
}

export default Swipeable