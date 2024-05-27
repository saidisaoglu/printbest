import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userFormData: {
    name: "Said",
    surname: "Isaoglu",
    email: "seidisaoglu@gmail.com",
    phone: "0503679899",
  },
  productFormData: {
    productName: "",
    productType: "",
    quantity: "",
    message: "",
  },
  partners:{
    name:"",
    img:""
  }
};
export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setuserFormData: (state, action) => {
      state.userFormData = { ...state.userFormData, ...action.payload };
    },
    setProductFormData: (state, action) => {
      state.productFormData = { ...state.productFormData, ...action.payload };
    },
    setPartners: (state, action) => {
      state.partners = { ...state.partners, ...action.payload };
    },
  },
});
export default stateSlice.reducer;
export const { setuserFormData, setProductFormData,setPartners } = stateSlice.actions;
