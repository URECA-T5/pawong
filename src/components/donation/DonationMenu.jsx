import React, { useState } from 'react';
import { MenuArea, MenuBtn } from '../../style/donation/donation';

const DonationMenu = () => {
  // 메뉴 버튼 클릭 이벤트 색 변수
  const [colors, setColors] = useState({
    defaultBgColor: '#F3F3F6',
    defaultFontColor: '#6D6E71',
    selectBgColor: '#E3ECFF',
    selectFontColor: '#5850FE',
  });

  const [category, setCategory] = useState('all');

  return (
    <MenuArea>
      {[
        { id: 'all', title: '전체' },
        { id: 'puppy', title: '강아지' },
        { id: 'cat', title: '고양이' },
      ].map(({ id, title }, index) => {
        return (
          <MenuBtn
            key={id + index}
            id={id}
            $bgcolor={
              category === id ? colors.selectBgColor : colors.defaultBgColor
            }
            $fontcolor={
              category === id ? colors.selectFontColor : colors.defaultFontColor
            }
            $fontWeight={category === id ? 'bold' : 'normal'}
            onClick={() => setCategory(id)}
          >
            {title}
          </MenuBtn>
        );
      })}
    </MenuArea>
  );
};

export default DonationMenu;
