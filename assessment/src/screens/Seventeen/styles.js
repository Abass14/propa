import { StyleSheet } from "react-native";
import { colors } from "../../constant/colors";

export const styles = StyleSheet.create({
    viewOne: {
        flex: 1, 
        marginHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50
    },  
    textView: {
        marginTop: 20
    },
    nameTxt: {
        fontSize: 28,
        color: colors.white
    },
    viewTwo: {
        flex: 1, 
        marginHorizontal: 20
    },
    flatlist: {
        marginTop: -50,
        marginBottom: 20
    }

})