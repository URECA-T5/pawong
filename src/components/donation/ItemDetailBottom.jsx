import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BottomContainer } from '../../style/donation/itemDetail';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import ItemBottomModal from './ItemBottomModal';
import { useLocation } from 'react-router-dom';

const ItemDetailBottom = ({ title, price }) => {
  const location = useLocation();
  const baseURL = useRef('http://localhost:3000');

  const isVisible = useRef();
  const handleShowModal = () => isVisible.current.showModal();
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <BottomContainer>
      <button
        className="btn__share"
        onClick={() =>
          handleCopyClipBoard(`${baseURL.current}${location.pathname}`)
        }
      >
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </button>
      <button className="btn__buy bold" onClick={handleShowModal}>
        구매하기
      </button>
      <ItemBottomModal modalRef={isVisible} title={title} price={price} />
    </BottomContainer>
  );
};

export default ItemDetailBottom;
