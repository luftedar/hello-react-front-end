import * as apiCalls from '../../Api/api';

const FETCH_RANDOM_GREETING = 'FETCH_RANDOM_GREETING';
const initialState = [];

export const getAllRandomGreeting = () => async (dispatch) => {
  const apiData = await apiCalls.fetchRandomGreeting();
  const payload = apiData.messages;
  dispatch({
    type: FETCH_RANDOM_GREETING,
    payload
  });
};

const randomReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING:
      return action.payload;
    default:
      return state;
  };
};

export default randomReducer;