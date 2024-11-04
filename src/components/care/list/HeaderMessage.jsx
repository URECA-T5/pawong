import React from 'react';
import { HeaderMessageSection } from '../../../style/care/list/careList';

const HeaderMessage = () => {
  return (
    <>
      <HeaderMessageSection>
        <img
          src="/asset/care/header_petLogo.svg"
          alt="no images"
          className="message__img-over"
        />
        <div className="message__box bold">
          <p>살펴보기를 클릭하면 상세정보를 볼 수 있어요!</p>
        </div>
      </HeaderMessageSection>
    </>
  );
};

export default HeaderMessage;
