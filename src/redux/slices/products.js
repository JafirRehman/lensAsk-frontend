import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: {},
    },
    reducers: {
        updateproducts: (state, action) => {
            state.allProducts = action.payload;
        },
    },
});

export const { updateproducts } = productsSlice.actions;

export default productsSlice.reducer;
