import * as a from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    case a.DELETE_BOOK:
      return state.filter((x) => x.id !== action.payload);
    case a.TOGGLE_FAVORITE:
      return state.map((x) => {
        return x.id === action.payload
          ? { ...x, isFavorite: !x.isFavorite }
          : x;
      });
    default:
      return state;
  }
};

export default booksReducer;
