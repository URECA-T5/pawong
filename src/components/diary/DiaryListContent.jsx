import React from 'react';
import { DiaryListContentDiv } from '../../style/careDiary/careDiaryList';

export const DiaryListCotent = ({ data }) => {
  return (
    <DiaryListContentDiv>
      <ul className="regular">
        {data.map((item) => (
          <li key={item.id}>
            <button className="diaryList__contentTag">{item.category}</button>
            <a href="/" className="bold">
              {item.title}
            </a>
            <div>
              <span className="diaryList__contentDate">{item.date}</span>
              <span className="diaryList__contentAuthor">{item.author}</span>
            </div>
            <div className="diaryList__contentLine"></div>
          </li>
        ))}
      </ul>
    </DiaryListContentDiv>
  );
};
