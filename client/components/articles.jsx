import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tw from 'twin.macro';

import {
  articleListSelector,
  fetchArticleListDispatcher,
  setArticleId,
} from '../ducks/modules/article';

const articleStyle = tw`pt-1 pl-6`;
const itemStyle = tw`mt-4 cursor-pointer`;

export const Articles = () => {
  const list = useSelector(articleListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleListDispatcher());
  }, [dispatch]);

  return (
    <div id="articles" css={articleStyle}>
      <h2>Articles</h2>

      {list &&
        list.length &&
        list.map(item => {
          const { id, title, body } = item;
          return (
            <div
              key={id}
              css={itemStyle}
              onClick={() => {
                dispatch(setArticleId(id));
              }}
            >
              <div tw="font-bold">
                [{id}] {title}
              </div>
              <div>{body}</div>
            </div>
          );
        })}
    </div>
  );
};
