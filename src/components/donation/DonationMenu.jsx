import React, { useState } from 'react';
import { MenuArea, MenuBtn } from '../../style/donation/donation';

const DonationMenu = ({ category, setCategory }) => {
  const [colors, setColors] = useState({
    defaultBgColor: '#F3F3F6',
    defaultFontColor: '#6D6E71',
    selectBgColor: '#E3ECFF',
    selectFontColor: '#5850FE',
  });

  return (
    <MenuArea>
      {[
        { id: '전체', title: '전체' },
        { id: '강아지', title: '강아지' },
        { id: '고양이', title: '고양이' },
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
