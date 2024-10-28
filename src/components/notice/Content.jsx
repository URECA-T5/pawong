// Content.jsx
import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  ContentSection,
} from '../../style/notice/content';

function Content() {
  const [selected, setSelected] = useState('start');

  return (
    <ContentSection>
      <ButtonGroup>
        <Button
          isSelected={selected === 'start'}
          onClick={() => setSelected('start')}
        >
          시작
        </Button>
        <Button
          isSelected={selected === 'inProgress'}
          onClick={() => setSelected('inProgress')}
        >
          진행
        </Button>
        <Button
          isSelected={selected === 'end'}
          onClick={() => setSelected('end')}
        >
          종료
        </Button>
      </ButtonGroup>
    </ContentSection>
  );
}

export default Content;
