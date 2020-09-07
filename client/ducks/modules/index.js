import { combineReducers } from 'redux';
import userReducer, { MOUNT as USER_MOUNT_POINT } from './user';
import articleReducer, { MOUNT as ARTICLE_MOUNT_POINT } from './article';

const rootReducer = combineReducers({
  [USER_MOUNT_POINT]: userReducer,
  [ARTICLE_MOUNT_POINT]: articleReducer,
})

export default rootReducer
