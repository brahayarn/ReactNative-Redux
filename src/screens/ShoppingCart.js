import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';

import { useSelector } from 'react-redux';
import {
  selectSubtotal,
  selectDeliveryPrice,
  selectTotal
} from '../store/cartSlice';
import CartListItem from '../components/CartListItem';

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal); 
  const deliveryPrice = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryPrice} US$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals} 
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginVertical: 2,
  },
  text: {
    fontSize: 18,
    color: "gray",
  },
  textBold: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ShoppingCart;
