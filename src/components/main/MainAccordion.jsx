import React, { useState } from 'react';
import { AccordionDiv } from '../../style/main/accordion';

const data = [
  {
    ques: '시작',
    ans: '당연하지만 아이의 기호에 맞는 사료와 간식을 미리 준비하는 것이 중요해요. 우리 입장에서는 따뜻한 집과 밥을 제공해주는 것이지만, 아이 입장에서는 갑자기 환경이 변해서 다른 친구들과 떨어진 것이 되거든요. 따라서 낯선 환경에서 아이가 친숙하게 느낄 수 있는 것들을 미리 준비해두면 아이가 새로운 환경에 적응하는데 큰 도움이 됩니다. 또한 익숙한 사료와 간식을 먹고 있을 때 조금씩 쓰다듬어 준다던지 하는 것도 민감성을 낮추는데 도움이 될 수 있어요.',
    show: false,
  },
  {
    ques: '진행',
    ans: '동물의 행동을 100% 예측하는 것은 불가능합니다. 주변 환경이 바뀌면 그에 맞는 새로운 훈련이 필요합니다. 반려인이 충분한 지식과 인내심을 가지고 대한다면 대부분은 해결될 수 임시보호로 생명을 연장하는 것도 중요하지만, 결국 궁극적인 목적은 궁극적인 목적은 입양입니다. 따라서 보다 큰 책임감을 가지고 나의 임보 동물이 좋은 가족을 찾을 수 있도록 만반의 준비를 시켜주는 것이 임보자의 역할입니다. 무엇보다 문제 행동이 발생하였을 때 해결하고자 하는 의지가 약하다면, 반려동물과 함께하는 삶을 처음부터 고려하지 않는 것을 추천드립니다.',
    show: false,
  },
  {
    ques: '종료',
    ans: '임보 종료까지 기간이 어느 정도 남은 상태라면 입양 홍보에 전력을 다해볼 수 있어요. 원활한 입양 및 임보를 위해 임보자는 빠르게 임보 종료 일정을 공유해주셔야 합니다. 또한, 임보자 입장에서도 책임감을 가지고 포옹 서비스에 꾸준히 글을 올려 함께 홍보한다면 좋은 입양처를 더욱 빠르게 찾을 수 있겠죠? 책임감을 가지고 마지막까지 임보 동물이 좋은 추억을 가질 수 있도록 노력해주세요.',
  },
];

const MainAccordion = ({ setSectionHeight }) => {
  const [showList, setShowList] = useState(data);

  const toggleCard = (index) => {
    const updatedList = showList.map((item, idx) =>
      idx === index ? { ...item, show: !item.show } : item,
    );
    setShowList(updatedList);
    const totalHeight = updatedList.reduce((acc, item) => {
      const itemHeight = item.show ? 55 + 3 : 0;
      return acc + itemHeight + (item.show ? 120 : 0);
    }, 0);

    setSectionHeight(280 + totalHeight);
  };

  const getCard = (item, index) => {
    return (
      <AccordionDiv key={index} $isActive={item.show}>
        <button onClick={() => toggleCard(index)}>
          <span className="regular">{item.ques}</span>
        </button>
        <div className={item.show ? 'ans' : 'ans card-none'}>
          <p>{item.ans}</p>
        </div>
      </AccordionDiv>
    );
  };

  return <div>{showList.map((item, index) => getCard(item, index))}</div>;
};

export default MainAccordion;
