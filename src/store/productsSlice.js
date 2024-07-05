import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initSlice = {
    products: products,
    selectedProduct: null

}

export const productsSlice = createSlice({
    name: "products",
    initialState: initSlice,
    reducers: {
        setSelectedProduct: (state, action) => {
            const productId = action.payload;
            state.selectedProduct = state.products.find(
            product => product.id === productId);
        }
    }
})