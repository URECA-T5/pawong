// FaqAccordion.jsx
import React, { useState } from 'react';
import { FaqItem, FaqTitle, FaqContent } from '../../style/notice/faqAccordion';

const FaqAccordion = ({ data = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!Array.isArray(data) || data.length === 0) {
    return <div>현재 표시할 FAQ가 없습니다.</div>;
  }

  return (
    <>
      {data.map((item, index) => (
        <FaqItem key={index} isOpen={openIndex === index}>
          <FaqTitle
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </FaqTitle>
          <FaqContent isOpen={openIndex === index}>{item.content}</FaqContent>
        </FaqItem>
      ))}
    </>
  );
};

export default FaqAccordion;
