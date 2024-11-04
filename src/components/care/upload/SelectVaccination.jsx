import React, { useRef, useState } from 'react';
import { TagButton } from '../../../style/care/upload/petUpload';
import { petUploadStore } from '../../../stores/petUploadStore';
import AddBottomModal from './AddBottomModal';

const button_list = [
  '광견병',
  '종합백신(DHPPI)',
  '켄넬코프',
  '코로나장염',
  '인풀루엔자',
];

const SelectVaccination = () => {
  const [customList, setCustomList] = useState([]);
  const { vaccination, setVaccination } = petUploadStore();
  const isVisible = useRef();
  const handleShowModal = () => isVisible.current.showModal();

  return (
    <div>
      <div className="div__row regular">
        <span className="text__title">접종백신</span>
        <span className="text__sub-title">(접종한 백신을 선택해주세요)</span>
      </div>
      <div className="div__row">
        {button_list.map((data, index) => {
          return (
            <TagButton
              key={index}
              $isClicked={vaccination.includes(data) ? true : false}
              onClick={() =>
                setVaccination(
                  vaccination.includes(data)
                    ? vaccination.filter((val) => val !== data)
                    : [...vaccination, data],
                )
              }
              className="bold"
            >
              {data}
            </TagButton>
          );
        })}
      </div>
      <div className="div__row">
        {customList &&
          customList.map((data, index) => {
            return (
              <TagButton
                key={index}
                $isClicked={vaccination.includes(data) ? true : false}
                onClick={() =>
                  setVaccination(
                    vaccination.includes(data)
                      ? vaccination.filter((val) => val !== data)
                      : [...vaccination, data],
                  )
                }
                className="bold"
              >
                {data}
              </TagButton>
            );
          })}
        <TagButton onClick={handleShowModal} className="bold">
          {' '}
          +추가
        </TagButton>
      </div>
      <span className="text__comment regular">
        * 필수 예방 접종 외에 접종내역이 있다면 추가해주세요
      </span>
      <AddBottomModal
        modalRef={isVisible}
        customList={customList}
        setCustomList={setCustomList}
      />
    </div>
  );
};

export default SelectVaccination;
