import { DonationRecordTabStore } from '../../stores/recordStore';
import { DRTabBtn, DRTabIndicator } from '../../style/record/donationRecord';
const DonationRecordTabButton = ({ tabName, children }) => {
  const { selectedTab, selectTab } = DonationRecordTabStore();
  const isSelected = selectedTab.tabName === tabName;

  return (
    <DRTabBtn
      className="regular"
      $isSelected={isSelected}
      onClick={() => selectTab(tabName, tabName === '1' ? 0 : 1)}
    >
      {children}
      {isSelected && <DRTabIndicator layoutId="tabIndicator" />}
    </DRTabBtn>
  );
};

export default DonationRecordTabButton;
