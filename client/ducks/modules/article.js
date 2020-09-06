export const MOUNT = 'article';

const FETCH_ARTICLE_LIST = 'FETCH_ARTICLE_LIST';
const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST';
const SET_ARTICLE_ID = 'SET_ARTICLE_ID';

const initialState = {
  articles: [],
  article_id: null,
};

const MOCK_ARTICLES = [
  { id: 1, title: 'aaaa', body: 'aaaaaaaaaa' },
  { id: 2, title: 'bbbb', body: 'bbbbbbbbbb' },
];

const mockFetchArticles = () => new Promise(resolve => {
  setTimeout(() => {
    resolve(MOCK_ARTICLES);
  }, 500);
});

// --------------------------------------------------------
// Selectors
// --------------------------------------------------------

export const articleIdSelector = state => state[MOUNT].article_id;
export const articleSelector = id => state => state[MOUNT].articles.find(p => p.id === id);
export const articleListSelector = state => state[MOUNT].articles;

// --------------------------------------------------------
// Reducers
// --------------------------------------------------------

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
  case FETCH_ARTICLE_LIST:
    return state;
  case SET_ARTICLE_LIST:
    return {
      ...state,
      articles: action.payload || [],
    };
  case SET_ARTICLE_ID:
    return {
      ...state,
      article_id: action.payload,
    };
  default:
    return state;
  }
}

// --------------------------------------------------------
// Actions
// --------------------------------------------------------

export const setArticleId = id => {
  return {
    type: SET_ARTICLE_ID,
    payload: id,
  };
}

// --------------------------------------------------------
// Operations
// --------------------------------------------------------

export const fetchArticleListDispatcher = () => dispatch => {
  return mockFetchArticles()
    .then(res => {
      dispatch({
        type: SET_ARTICLE_LIST,
        payload: res,
      });
    });
}
