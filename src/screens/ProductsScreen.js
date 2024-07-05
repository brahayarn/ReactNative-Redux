import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import products from "../data/products";
import { useNavigation } from "@react-navigation/native";

const PressHandler = (item) => {
  console.warn("Pressed " + item.name);
};
{/*в функцію дано item то і 
в return повинно бути item в функії*/}
const ProductsScreen = () => {
  {/* замість  props можна вик. hook*/}
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("ProductDetails",
            {/* пишемо імя куди ми хочемо щоб перевило назва така 
            як позначена в navigation в name*/},
            { item })}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
