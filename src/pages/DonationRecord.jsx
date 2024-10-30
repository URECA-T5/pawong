import { useEffect } from 'react';
import { DonationRecordTabStore } from '../stores/recordStore';
import GlobalStyle, { MainContainer } from '../style/global/global';
import { DRHeader, DRTabList } from '../style/record/donationRecord';
import { AnimatePresence } from 'framer-motion';
import DonationRecordTabButton from '../components/record/DonationRecordTabButton';
import DonationRecordContent from '../components/record/DonationRecordContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import DonationSent from '../components/record/DonationSent';
import DonationReceived from '../components/record/DonationReceived';
import DonationRecordNull from '../components/record/DonationRecordNull';

const DonationRecord = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const { selectedTab, initializeTab } = DonationRecordTabStore();
  useEffect(() => {
    initializeTab('1', 0);
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainContainer style={{ backgroundColor: 'white' }}>
        <DRHeader className="extraBold">
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
        </DRHeader>
        <DRTabList>
          <DonationRecordTabButton tabName="1">
            💞 보낸 후원 내역
          </DonationRecordTabButton>
          <DonationRecordTabButton tabName="2">
            🐶 받은 후원 내역
          </DonationRecordTabButton>
        </DRTabList>
        <AnimatePresence initial={false} custom={selectedTab.direction}>
          <DonationRecordContent key="tab1" tabName="1">
            <DonationSent />
          </DonationRecordContent>
          <DonationRecordContent key="tab2" tabName="2">
            <DonationReceived />
          </DonationRecordContent>
        </AnimatePresence>
      </MainContainer>
    </>
  );
};

export default DonationRecord;
