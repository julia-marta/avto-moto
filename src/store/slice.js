import {createSlice} from '@reduxjs/toolkit';
import {mockCar} from "../mocks";

const initialState = {
  productData: mockCar
}

const autoMotoSlice = createSlice({
  name: 'autoMoto',
  initialState,
  reducers: {
  }
});

const Reducer = autoMotoSlice.reducer;

// export const {} = autoMotoSlice.actions;
export default Reducer;
