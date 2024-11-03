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
  white: '#ffffff',
};

export const DHHeader = styled.header`
  width: 100%;
  height: 3.25rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  background-color: ${colors.white};
  border-bottom: 0.063rem solid ${colors.light_gray};
  font-size: 1.2rem;
  .donationRecord__style {
    cursor: pointer;
  }
`;

export const DHTabBtn = styled(motion.button)`
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

export const DHTabIndicator = styled(motion.div)`
  position: absolute;
  bottom: -0.313rem;
  left: 0;
  height: 0.063rem;
  background-color: ${colors.black};
  width: 100%;
`;

export const DHTabList = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  position: relative;
`;

export const DHBtnDiv = styled.div`
  text-align: center;
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  button {
    width: 8rem;
    height: 1.9rem;
    font-size: 0.9rem;
    border-radius: 0.688rem;
    border: 0;
    background-color: ${colors.light_blue};
    color: ${colors.pastel_blue};
    cursor: pointer;
  }
`;

export const DHNullDiv = styled.section`
  img {
    width: 100%;
    height: 11.875rem;
    margin-bottom: 1rem;
  }
`;
