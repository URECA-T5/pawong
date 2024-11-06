import GlobalStyle, { MainContainer } from '../style/global/global';
import { Navbar } from '../style/main/navbar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import {
  faAngleRight,
  faBars,
  faHouse,
  faPaw,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import {
  Header,
  Login_Box,
  Profile_Img,
  Profile_User,
  Section,
  Menu_list_row,
  Menu_List,
  Menu_Img,
} from '../style/menu/menu';

function Menu() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleClick = (path) => {
    navigate(path);
  };
  const menuItems = [
    {
      imgSrc: '/asset/menu/crown_icon.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      text: '임시보호 상식',
      onClick: () => navigate('/common-sense'),
    },
    {
      imgSrc: '/asset/menu/love_icon.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      text: '임보/입양문의',
    },
    {
      imgSrc: '/asset/menu/dog_icon.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      text: '임보동물 목록',
      onClick: () => navigate('/care-list'),
    },
    {
      imgSrc: '/asset/menu/record_icon.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      text: '임보일지 작성',
      onClick: () => navigate('/diary-upload'),
    },
    {
      imgSrc: '/asset/menu/mypage_icon.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      text: '마이페이지',
      onClick: () => navigate('/mypage'),
    },
    {
      imgSrc: '/asset/menu/badge_icon.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      text: '인증배지 신청',
    },
  ];

  const costomerItmes = [
    {
      imgSrc: '/asset/menu/cs_icon.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      text: '고객센터',
    },
    {
      imgSrc: '/asset/menu/notice_icon.svg',
      alt: '등록된 이미지가 없습니다.(Image not available)',
      text: '공지사항',
      onClick: () => navigate('/notice'),
    },
  ];

  const navItems = [
    { path: '/', icon: faHouse, label: '홈' },
    { path: '/mypage', icon: faPaw, label: '포옹 기록' },
    { path: '/pet-upload', icon: faPencil, label: '임보동물 등록' },
    { path: '/menu', icon: faBars, label: '메뉴' },
  ];

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header>
          <p className="extraBold">
            <a href="/">포옹</a>
          </p>
          <FontAwesomeIcon
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick('/login')}
            icon={faCircleUser}
          />
        </Header>

        <Login_Box>
          <div>
            <Profile_Img
              src="/asset/menu/empty_profile.svg"
              alt="Empty Profile"
            ></Profile_Img>
          </div>
          <Profile_User onClick={handleLoginClick} title="login">
            포옹에<span className="text_color"> 로그인 </span>해주세요
          </Profile_User>
          <FontAwesomeIcon icon={faAngleRight} />
        </Login_Box>

        <Section>
          <p>활동</p>
          {Array.from({ length: 3 }).map((_, index) => (
            <Menu_list_row key={index}>
              {menuItems.slice(index * 2, index * 2 + 2).map((item, index) => (
                <Menu_List key={index}>
                  <div className="img_box">
                    <Menu_Img src={item.imgSrc} alt={item.alt} />
                  </div>
                  <button onClick={item.onClick}>{item.text}</button>
                </Menu_List>
              ))}
            </Menu_list_row>
          ))}
        </Section>
        <Section>
          <p>사이트이용</p>
          {Array.from({ length: 3 }).map((_, index) => (
            <Menu_list_row key={index}>
              {costomerItmes
                .slice(index * 2, index * 2 + 2)
                .map((item, index) => (
                  <Menu_List key={index}>
                    <div className="img_box">
                      <Menu_Img src={item.imgSrc} alt={item.alt} />
                    </div>
                    <button onClick={item.onClick}>{item.text}</button>
                  </Menu_List>
                ))}
            </Menu_list_row>
          ))}
        </Section>
        <Navbar>
          <div>
            {navItems.map((item) => (
              <button key={item.path} onClick={() => handleClick(item.path)}>
                <FontAwesomeIcon icon={item.icon} />
                <span className="regular">{item.label}</span>
              </button>
            ))}
          </div>
        </Navbar>
      </MainContainer>
    </>
  );
}

export default Menu;
