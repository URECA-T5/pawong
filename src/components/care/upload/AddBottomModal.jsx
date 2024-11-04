import React, { useState } from 'react';
import {
  InputSection,
  ModalContainer,
} from '../../../style/care/upload/petUpload';

const AddBottomModal = ({ modalRef, customList, setCustomList }) => {
  const [val, setVal] = useState('');

  return (
    <ModalContainer
      ref={modalRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) modalRef.current.close();
      }}
    >
      <div className="modal">
        <InputSection>
          <p className="modal__title regular">💉 접종 백신 추가</p>
          <input
            className="section__input-field regular"
            placeholder="추가할 카테고리를 입력해주세요"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button
            onClick={() => {
              setCustomList([...customList, val]);
              modalRef.current.close();
            }}
            className="modal__buyBtn bold"
          >
            추가하기
          </button>
        </InputSection>
      </div>
    </ModalContainer>
  );
};

export default AddBottomModal;
