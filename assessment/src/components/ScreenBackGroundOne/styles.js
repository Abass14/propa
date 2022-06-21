import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constant/colors";

const degToRad = (deg) => (deg * Math.PI) / 180;
const radToDeg = (rad) => (rad * 180) / Math.PI;

const width = Dimensions.get("window").width;
const screenRadius = 55;
const theta = degToRad(7);
const horizontalAxisLength = 25


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    viewOne: {
        flex: 1,
        backgroundColor: colors.purple,
    },
    viewTwo: {
        flex: 2,
        backgroundColor: colors.light_gray
    }
})