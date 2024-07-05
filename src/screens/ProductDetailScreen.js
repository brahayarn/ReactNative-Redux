import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { useSelector } from 'react-redux';

const ProductDetailsScreen = () => {
  const { width } = useWindowDimensions();
  const product = useSelector(state => state.products.selectedProduct);
  

  const addToCartHandler = () => {
    console.warn("Add to cart");
  };

  return (
    <View>
      <ScrollView>
      {/* Image Carousel */}
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} 
          style={[styles.image, { width: width }]} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={{padding: 20}}>
      {/* Title */}
      <Text style={styles.title}>{product.name}</Text>

      {/* Price */}
      <Text style={styles.price}>${product.price}</Text>
      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable
        onPress={addToCartHandler}
       style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
    
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ProductDetailsScreen;
