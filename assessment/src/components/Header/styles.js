import { StyleSheet } from "react-native"
import { colors } from "../../constant/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    text: {
        color: colors.white,
        textAlign: 'center',
    }
})          