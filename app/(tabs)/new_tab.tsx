import { StyleSheet, Text, View, Pressable } from "react-native";

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Settings Page</Text>
        <Text style={styles.subtitle}>Notificaitons</Text>
        <Text style={styles.subtitle}>Emails</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
