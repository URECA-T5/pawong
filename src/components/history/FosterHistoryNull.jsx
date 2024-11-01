import React from 'react';
import { FHNullSection } from '../../style/history/fosterHistory';

const FosterHistoryNull = () => {
  return (
    <>
      <FHNullSection className="regular">
        <img src={'/asset/history/fosterNull.svg'} alt="임보 처음" />
        <p>도움이 필요한 동물들에게</p>
        <p>포옹을 부탁드려요</p>
      </FHNullSection>
    </>
  );
};

export default FosterHistoryNull;
