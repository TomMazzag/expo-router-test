import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const User = () => {
  const {id} = useLocalSearchParams();

  return (
    <View>
      <Text>User Page for user {id}</Text>
    </View>
  );
}

export default User;