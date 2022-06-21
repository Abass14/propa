import { StyleSheet } from "react-native";
import { colors } from "../../constant/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderBottomWidth: 1, 
        borderBottomColor: colors.ash
    }
})