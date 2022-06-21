import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './src/navigation/bottom/BottomTab';
import { colors } from './src/constant/colors';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="light" backgroundColor={colors.purple} />
        <BottomTabs />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
