import { useEffect } from 'react';
import GlobalStyle, { MainContainer } from '../../style/global/global';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import DonationSent from '../../components/history/DonationSent';
import DonationReceived from '../../components/history/DonationReceived';
import { DHHeader, DHTabList } from '../../style/history/donationHistory';
import DonationHistoryContent from '../../components/history/DonationHistoryContent';
import { DonationHistoryTabStore } from '../../stores/historyStore';
import DonationHistoryTabButton from '../../components/history/DonationHistoryTabButton';

const DonationHistory = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const { selectedTab, initializeTab } = DonationHistoryTabStore();
  useEffect(() => {
    initializeTab('1', 0);
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainContainer style={{ backgroundColor: 'white' }}>
        <DHHeader className="extraBold">
          <FontAwesomeIcon
            className="donationRecord__style"
            onClick={() => handleClick('/mypage')}
            icon={faAngleLeft}
          />
          <div className="header__title">
            <p className="extraBold">후원 기록</p>
          </div>
          <FontAwesomeIcon
            className="donationRecord__style"
            onClick={() => handleClick('/')}
            icon={faHouse}
          />
        </DHHeader>
        <DHTabList>
          <DonationHistoryTabButton tabName="1">
            💞 보낸 후원 내역
          </DonationHistoryTabButton>
          <DonationHistoryTabButton tabName="2">
            🐶 받은 후원 내역
          </DonationHistoryTabButton>
        </DHTabList>
        <AnimatePresence initial={false} custom={selectedTab.direction}>
          <DonationHistoryContent key="tab1" tabName="1">
            <DonationSent />
          </DonationHistoryContent>
          <DonationHistoryContent key="tab2" tabName="2">
            <DonationReceived />
          </DonationHistoryContent>
        </AnimatePresence>
      </MainContainer>
    </>
  );
};

export default DonationHistory;
