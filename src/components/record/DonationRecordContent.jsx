import { DonationRecordTabStore } from '../../stores/recordStore';
import { motion } from 'framer-motion';

const DonationRecordContent = ({ tabName, children }) => {
  const { selectedTab } = DonationRecordTabStore();
  const { direction } = selectedTab;

  const contentVariants = {
    initial: { opacity: 0, x: `${-5 * direction}%` },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: `${5 * -direction}%` },
  };

  return (
    selectedTab.tabName === tabName && (
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="out"
      >
        {children}
      </motion.div>
    )
  );
};

export default DonationRecordContent;
