import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SocialLoginSuccess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const accessToken = params.get('accessToken');
    const refreshToken = params.get('accessToken');

    if (refreshToken && accessToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/');
    }
  }, [navigate]);
};
export default SocialLoginSuccess;
