import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
                <Stack.Screen name="Products" component={ProductsScreen} 
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate('ShoppingCart')} style={styles.cartIcon}>
                                <FontAwesome5 name="shopping-cart" size={24} color="black" />
                            </Pressable>
                        )
                    })}
                />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const styles = StyleSheet.create({
    cartIcon: {
        flexDirection: 'row',
    },
    text:{
        marginLeft: 5,
        fontWeight: '500',

    }
});

export default Navigation;