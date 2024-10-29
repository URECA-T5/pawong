import GlobalStyle, { MainContainer } from '../style/global/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Header,
  ImgContainer,
  InputContainer,
  Section,
} from '../style/register/careDiary';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { diaryStore } from '../stores/diaryStore';

const InputField = ({ label, type, placeholder, maxLength, name }) => {
  const { formData, setFormData } = diaryStore();

  const handleChange = (e) => {
    setFormData(name, e.target.value);
  };

  return (
    <div>
      <p className="input_Content">{label}</p>
      {type === 'textarea' ? (
        <textarea
          className="input_Content"
          placeholder={placeholder}
          maxLength={maxLength}
          value={formData[name]}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          className="input_Content"
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

function CareRegister() {
  const { setFormData } = diaryStore.getState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { formData } = diaryStore.getState();
    console.log(formData);
  };

  const onCancleClick = (e) => {
    e.preventDefault();
    setFormData('tag', '');
    setFormData('title', '');
    setFormData('location', '');
    setFormData('story', '');
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header>
          <p className="extraBold">일지작성</p>
          <FontAwesomeIcon icon={faBell} className="icon icon_bell" />
          <FontAwesomeIcon icon={faHouse} className="icon icon_home" />
        </Header>

        <Section>
          <form onSubmit={handleSubmit}>
            <ImgContainer>
              <img
                src="/asset/register/registerImg_icon.svg"
                alt="프로필 이미지를 등록해주세요"
              />
            </ImgContainer>
            <h4 className="bold">임시보호 일지를 작성해주세요</h4>
            <InputContainer>
              {['tag', 'title', 'location', 'story'].map((field) => (
                <InputField
                  key={field}
                  label={
                    field === 'tag'
                      ? '태그'
                      : field === 'title'
                        ? '제목'
                        : field === 'location'
                          ? '장소'
                          : '이야기'
                  }
                  type={field === 'story' ? 'textarea' : 'text'}
                  placeholder={
                    field === 'tag'
                      ? '태그를 선택해주세요'
                      : field === 'title'
                        ? '제목 입력'
                        : field === 'location'
                          ? '장소 입력'
                          : '현재상황 및 강아지에 대한 이야기 모두 좋아요 (최대300자)'
                  }
                  maxLength={field === 'story' ? 300 : undefined}
                  name={field}
                />
              ))}
            </InputContainer>
            <button onClick={onCancleClick}>취소</button>
            <button type="submit">등록</button>
          </form>
        </Section>
      </MainContainer>
    </>
  );
}

export default CareRegister;
