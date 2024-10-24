import GlobalStyle, { MainContainer } from '../style/global/global';
import { Content } from '../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { Header } from '../style/menu/menu';

function Menu() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header className="extraBold">
          포옹
          <FontAwesomeIcon className="mypageIcon" icon={faCircleUser} />
        </Header>
        <Content>
          <section></section>
          <section></section>
        </Content>
      </MainContainer>
    </>
  );
}

export default Menu;
