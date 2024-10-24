// Home.js
import GlobalStyle, { MainContainer } from '../style/global/global';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <div className="container">
          <button onClick={handleLoginClick}>Login 이동</button>
        </div>
      </MainContainer>
    </>
  );
};

export default Home;
