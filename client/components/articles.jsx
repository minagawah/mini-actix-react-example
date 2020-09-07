import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tw, { css } from 'twin.macro';

import {
  articleListSelector,
  fetchArticleListDispatcher,
  setArticleId,
} from '../ducks/modules/article';

const articleStyle = css`
  ${tw`mt-3 p-2 cursor-pointer`}
`;

export const Articles = () => {
  const list = useSelector(articleListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleListDispatcher());
  }, [dispatch]);

  return (
    <div id="articles" tw="p-4">
      <h2>Articles</h2>

      {list && list.length && list.map(article => {
        const { id, title, body } = article;
        return (
          <div key={id} css={articleStyle} onClick={() => {
            dispatch(setArticleId(id));
          }}>
            <div tw="font-bold">[{id}] {title}</div>
            <div>{body}</div>
          </div>
        );
      })}
    </div>
  );
}
