import {createSlice} from '@reduxjs/toolkit';
import {defaultReview} from '../const';
import {mockCar, mockSpecification, mockReviews} from "../mocks";

const initialReview = localStorage.getItem('review') ? JSON.parse(localStorage.getItem('review')) : defaultReview;

const initialState = {
  productData: mockCar,
  specification: mockSpecification,
  reviews: mockReviews,
  reviewData: initialReview,
};

const autoMotoSlice = createSlice({
  name: 'autoMoto',
  initialState,
  reducers: {
    saveReviewData(state, action) {
      localStorage.setItem('review', JSON.stringify(action.payload));
      state.reviewData = action.payload;
    },
    clearLogs(state) {
      state.logs.length = 0;
    },
    clearReviewData(state) {
      localStorage.removeItem('review');
      state.reviewData = defaultReview;
    },
    addReview(state, action) {
      state.reviews.push({...action.payload, rating: Number(action.payload.rating), date: new Date()});
    },
  }
});

const Reducer = autoMotoSlice.reducer;

export const {saveReviewData, clearReviewData, addReview} = autoMotoSlice.actions;
export default Reducer;
