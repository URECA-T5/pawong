import googleLogo from '../asset/login/googleLogo.svg';
import kakaoLogo from '../asset/login/kakaoLogo.svg';
import naverLogo from '../asset/login/naverLogo.svg';
import appleLogo from '../asset/login/appleLogo.svg';
import serverBaseUrl from './serverConfig';

export const SOCIAL_LOGIN_PROVIDER = {
  GOOGLE: {
    img: googleLogo,
    url: `${serverBaseUrl}/auth/google`,
    css: 'google',
  },
  KAKAO: {
    img: kakaoLogo,
    url: 'http://localhost:8080/auth/kakao',
    css: 'kakao',
  },
  NAVER: {
    img: naverLogo,
    url: 'http://localhost:8080/auth/naver',
    css: 'naver',
  },
  APPLE: {
    img: appleLogo,
    url: 'http://localhost:8080/auth/apple',
    css: 'apple',
  },
};
