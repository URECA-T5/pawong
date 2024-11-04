import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalStyle, { MainContainer } from '../style/global/global';
import React from 'react';
import { ScrollToTop } from './ScrollToTop';

const DefaultLayout = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </MainContainer>
    </>
  );
};

export default DefaultLayout;
