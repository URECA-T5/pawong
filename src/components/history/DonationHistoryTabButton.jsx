import { DonationHistoryTabStore } from '../../stores/historyStore';
import { DHTabBtn, DHTabIndicator } from '../../style/history/donationHistory';

const DonationHistoryTabButton = ({ tabName, children }) => {
  const { selectedTab, selectTab } = DonationHistoryTabStore();
  const isSelected = selectedTab.tabName === tabName;

  return (
    <DHTabBtn
      className="regular"
      $isSelected={isSelected}
      onClick={() => selectTab(tabName, tabName === '1' ? 0 : 1)}
    >
      {children}
      {isSelected && <DHTabIndicator layoutId="tabIndicator" />}
    </DHTabBtn>
  );
};

export default DonationHistoryTabButton;
