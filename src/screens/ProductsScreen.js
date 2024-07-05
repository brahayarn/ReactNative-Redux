import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useSelector, useDispatch} from "react-redux";
import { productsSlice } from "../store/productsSlice";

const PressHandler = (item) => {
  console.warn("Pressed " + item.name);
};
{/*в функцію дано item то і 
в return повинно бути item в функії*/}
const ProductsScreen = ({navigation}) => {
  {/* замість  props можна вик. hook*/}
 {/* const navigation = useNavigation();*/}
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products.products);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            {/* оновлюємо дані в store */}
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate("ProductDetails")
          }}
          style={styles.itemContainer}
        >
          {/* пишемо імя куди ми хочемо щоб перевило назва така 
            як позначена в navigation в name*/}
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
