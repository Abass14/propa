import { StyleSheet } from "react-native";
import { colors } from "../../constant/colors";

export const styles = StyleSheet.create({
    styleTwo: {
        flex: 3
    },
    childOne: {
        flex: 1,
    },
    childTwo: {
        flex: 1,
    },
    childViews: {
        backgroundColor: colors.white,
        flex: 6,
        paddingHorizontal: 20,
        elevation: 2,
        shadowColor: colors.gray
    },
    iconView: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingTop: 20,
        marginHorizontal: 20
    },
    iconCircle: {
        width: 50,
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.ash,
        alignItems: 'center',
        justifyContent: 'center'
    },
    moneyinCard: {
        backgroundColor: colors.white,
        elevation: 5,
        shadowColor: colors.gray,
        borderRadius: 5,
        height: 115,
        width: '100%',
        marginTop: 20
    },
    thrityDays: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 10
    },
    money: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})