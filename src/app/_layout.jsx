import { Text, View,Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
export default function RootLayout() {
  return (
    <SafeAreaView>
            <Text>Hi there</Text>
            <Button title="Submit" style={{borderRadius: 50}} />
            <StatusBar backgroundColor="#010709" style="light" />
    </SafeAreaView>
  )
}
 