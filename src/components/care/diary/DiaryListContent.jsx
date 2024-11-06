import React from 'react';
import { DiaryListContentDiv } from '../../../style/care/diary/careDiaryList';

export const DiaryListCotent = ({ data }) => {
  const formatDate = (date) => {
    return new Date(date)
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\./g, '.');
  };
  return (
    <DiaryListContentDiv>
      <ul className="regular">
        {data.map((item) => (
          <li key={item.id}>
            <button className="diaryList__contentTag">{item.tag}</button>
            <a href="/diary-detail" className="bold">
              {item.title}
            </a>
            <div>
              <span className="diaryList__contentDate">
                {formatDate(item.createdAt)}
              </span>
              <span className="diaryList__contentAuthor">
                {item.authorName}
              </span>
            </div>
            <div className="diaryList__contentLine"></div>
          </li>
        ))}
      </ul>
    </DiaryListContentDiv>
  );
};
