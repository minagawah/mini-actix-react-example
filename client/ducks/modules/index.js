import { combineReducers } from 'redux';
import articleReducer, { MOUNT as ARTICLE_MOUNT_POINT } from './article';

const rootReducer = combineReducers({
  [ARTICLE_MOUNT_POINT]: articleReducer,
});

export default rootReducer;
