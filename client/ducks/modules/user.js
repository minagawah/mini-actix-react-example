export const MOUNT = 'user';

const SET_USER = 'SET_USER';

const initialState = {
  user: null,
};

const MOCK_USER = {
  id: 9999,
  name: 'joe',
  age: 3,
  gender: 'male',
};

const mockAuth = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(MOCK_USER);
  }, 500);
});

// --------------------------------------------------------
// Selectors
// --------------------------------------------------------

export const userSelector = state => state[MOUNT].article_id;

// --------------------------------------------------------
// Reducers
// --------------------------------------------------------

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      user: action.payload || [],
    };
  default:
    return state;
  }
}

// --------------------------------------------------------
// Actions / Operations
// --------------------------------------------------------

export const authUser = data => dispatch => {
  return mockAuth(data)
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res,
      });
    });
}
