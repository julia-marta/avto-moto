import {createSlice} from '@reduxjs/toolkit';
import {mockCar, mockSpecification, mockReviews} from "../mocks";

const initialState = {
  productData: mockCar,
  specification: mockSpecification,
  reviews: mockReviews
};

const autoMotoSlice = createSlice({
  name: 'autoMoto',
  initialState,
  reducers: {
  }
});

const Reducer = autoMotoSlice.reducer;

// export const {} = autoMotoSlice.actions;
export default Reducer;
