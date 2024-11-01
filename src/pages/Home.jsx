import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate('/login');

  return (
    <div className="container">
      <button onClick={handleLoginClick}>Login 이동</button>
    </div>
  );
};

export default Home;
