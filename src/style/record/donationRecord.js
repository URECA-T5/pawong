import { motion } from 'framer-motion';
import styled from 'styled-components';

const colors = {
  dark_gray: '#6D6E71',
  gray: '#CCCCCC',
  light_gray: '#E3E3E3',
  pastel_gray: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
  black: '#000000',
};

export const DRHeader = styled.header`
  width: 100%;
  height: 52px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 20px;
  background-color: white;
  border-bottom: 1px solid ${colors.light_gray};
  font-size: 1.2rem;
  .donationRecord__style {
    cursor: pointer;
  }
`;

export const DRTabBtn = styled(motion.button)`
  margin: 2.5rem 0 3rem 0;
  width: 40%;
  position: relative;
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ $isSelected }) =>
    $isSelected ? `${colors.black}` : `${colors.dark_gray}`};
  font-size: 1rem;
`;

export const DRTabIndicator = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 1px;
  background-color: ${colors.black};
  width: 100%;
`;

export const DRTabList = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  position: relative;
`;

export const DRBtnDiv = styled.div`
  text-align: center;
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  button {
    width: 8rem;
    height: 1.9rem;
    font-size: 0.9rem;
    border-radius: 11px;
    border: 0;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    cursor: pointer;
  }
`;
