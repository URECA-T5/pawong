import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useUserProfile from '../../../stores/auth/useUserProfile';

const SocialLoginSuccess = () => {
  const navigate = useNavigate();
  const { setUser } = useUserProfile();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const accessToken = params.get('accessToken');
    const refreshToken = params.get('accessToken');
    const nickName = params.get('nickName');
    const profileImage = params.get('profileImage');

    if (refreshToken && accessToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setUser({ nickName, profileImage });
      navigate('/');
    }
  }, [navigate]);
};
export default SocialLoginSuccess;
