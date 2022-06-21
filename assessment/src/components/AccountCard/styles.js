import { StyleSheet } from "react-native";
import { colors } from "../../constant/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: colors.white,
        elevation: 10,
        shadowColor: colors.ash,
        borderRadius: 5,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOne: {
        justifyContent: 'space-evenly'
    }
})