import JSConfetti from 'js-confetti';
import { useNavigate } from 'react-router-dom';
import { DHBtnDiv, DHNullDiv } from '../../style/history/donationHistory';

const jsConfetti = new JSConfetti();

const DonationHistoryNull = () => {
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
      <DHNullDiv className="regular">
        <img
          src={'/asset/history/donationNull.svg'}
          alt="후원이 처음이시군요"
        />
        <DHBtnDiv>
          <p>후원이 처음이시군요!</p>
          <button className="bold" onClick={handleBtnClick}>
            후원 하러가기
          </button>
        </DHBtnDiv>
      </DHNullDiv>
    </>
  );
};

export default DonationHistoryNull;
