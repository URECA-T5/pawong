import { DonationHistoryTabStore } from '../../stores/historyStore';
import { motion } from 'framer-motion';

const DonationHistoryContent = ({ tabName, children }) => {
  const { selectedTab } = DonationHistoryTabStore();
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

export default DonationHistoryContent;
