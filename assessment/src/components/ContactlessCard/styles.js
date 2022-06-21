import { StyleSheet } from "react-native";
import { colors } from "../../constant/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        borderRadius: 5,
        elevation: 10,
        // backgroundColor: colors.gradient_purple,
        shadowColor: colors.light_gray,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {
        justifyContent: 'center',
        marginStart: -30
    },
    text: {
        color: colors.white,
    },
    clear: {
        width: 17,
        height: 17,
        borderRadius: 8.5,
        backgroundColor: colors.ash,
        alignSelf: 'center',
        marginEnd: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})