import { Tabs } from "expo-router"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                tabBarLabelStyle: { color: "black" },
                headerShown: false,
                title: "Menu",
                tabBarIcon: ({focused}) => focused ?
                <Ionicons name="home" size={24} color="black" /> : <Ionicons name="home-outline" size={24} color="gray" />
            }}/>
            <Tabs.Screen name="user_profile" options={{
                tabBarLabelStyle: { color: "black" },
                headerShown: false,
                title: "Account",
                tabBarIcon: ({focused}) => focused ?
                <MaterialIcons name="account-circle" size={28} color="black" /> : <MaterialIcons name="account-circle" size={28} color="gray" />
            }}/>
            <Tabs.Screen name="new_tab" options={{
                tabBarLabelStyle: { color: "black" },
                headerShown: false,
                title: "Settings",
                tabBarIcon: ({focused}) => focused ?
                <Ionicons name="settings-sharp" size={24} color="black" /> : <Ionicons name="settings-outline" size={24} color="gray" />
            }}/>
        </Tabs>
    )
}

export default TabsLayout