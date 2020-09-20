import { articles as fetchArticles } from '../../lib/api/article';

export const MOUNT = 'article';

const FETCH_ARTICLE_LIST = 'FETCH_ARTICLE_LIST';
const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST';
const SET_ARTICLE_ID = 'SET_ARTICLE_ID';

const initialState = {
  articles: [],
  article_id: null,
};

// --------------------------------------------------------
// Selectors
// --------------------------------------------------------

export const articleIdSelector = state => state[MOUNT].article_id;
export const articleSelector = id => state =>
  state[MOUNT].articles.find(p => p.id === id);
export const articleListSelector = state => state[MOUNT].articles;

// --------------------------------------------------------
// Reducers
// --------------------------------------------------------

export default function reducer(state = initialState, action = {}) {
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
};

// --------------------------------------------------------
// Operations
// --------------------------------------------------------

export const fetchArticleListDispatcher = () => async dispatch => {
  const articles = await fetchArticles();
  dispatch({
    type: SET_ARTICLE_LIST,
    payload: articles,
  });
};
