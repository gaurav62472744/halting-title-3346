import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_MEN_PRODUCT_FAILURE,
  ADD_MEN_PRODUCT_REQUEST,
  ADD_MEN_PRODUCT_SUCCESS,
  ADD_WOMEN_PRODUCT_REQUEST,
  ADD_WOMEN_PRODUCT_SUCCESS,
  ADD_WOMEN_PRODUCT_FAILURE,
  ADD_CHILD_PRODUCT_REQUEST,
  ADD_CHILD_PRODUCT_SUCCESS,
  ADD_CHILD_PRODUCT_FAILURE,
} from "./actionTypes";

const inisitalState = {
  products: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = inisitalState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case ADD_MEN_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_MEN_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_MEN_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case ADD_WOMEN_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_WOMEN_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_WOMEN_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case ADD_CHILD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_CHILD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_CHILD_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
export { reducer };
