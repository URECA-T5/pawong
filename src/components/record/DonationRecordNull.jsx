import JSConfetti from 'js-confetti';
import { useNavigate } from 'react-router-dom';
import { DRBtnDiv, DRNullDiv } from '../../style/record/donationRecord';

const jsConfetti = new JSConfetti();

const DonationRecordNull = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    jsConfetti
      .addConfetti({
        emojis: ['💝', '💖', '💗', '💘'],
        emojiSize: 60,
        confettiNumber: 10,
      })
      .then(() => navigate('/dog'));
  };

  return (
    <>
      <DRNullDiv className="regular">
        <img src={'/asset/record/donationNull.svg'} alt="후원이 처음이시군요" />
        <DRBtnDiv>
          <p>후원이 처음이시군요!</p>
          <button className="bold" onClick={handleBtnClick}>
            후원 하러가기
          </button>
        </DRBtnDiv>
      </DRNullDiv>
    </>
  );
};

export default DonationRecordNull;
