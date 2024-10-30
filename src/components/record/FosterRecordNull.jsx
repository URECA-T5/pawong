import React from 'react';
import { FRNullSection } from '../../style/record/fosterRecord';

const FosterRecordNull = () => {
  return (
    <>
      <FRNullSection className="regular">
        <img src={'/asset/record/fosterNull.svg'} alt="임보 처음" />
        <p>도움이 필요한 동물들에게</p>
        <p>포옹을 부탁드려요</p>
      </FRNullSection>
    </>
  );
};

export default FosterRecordNull;
