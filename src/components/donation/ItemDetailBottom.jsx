import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BottomContainer } from '../../style/donation/itemDetail';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import ItemBottomModal from './ItemBottomModal';

const ItemDetailBottom = ({ title, price }) => {
  const isVisible = useRef();
  const handleShowModal = () => isVisible.current.showModal();

  return (
    <BottomContainer>
      <div className="btn__share">
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </div>
      <button className="btn__buy bold" onClick={handleShowModal}>
        구매하기
      </button>
      <ItemBottomModal modalRef={isVisible} title={title} price={price} />
    </BottomContainer>
  );
};

export default ItemDetailBottom;
