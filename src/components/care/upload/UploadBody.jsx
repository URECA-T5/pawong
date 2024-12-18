import React from 'react';
import {
  BodySection,
  ButtonSubmit,
  colors,
  InputSection,
} from '../../../style/care/upload/petUpload';
import LoadImage from './LoadImage';
import UploadInputField from './UploadInputField';
import SelectionField from './SelectionField';
import SelectVaccination from './SelectVaccination';
import { useNavigate } from 'react-router-dom';
import { body_question_list } from './body_question_list';
import { petUploadStore } from '../../../stores/care/upload/petUploadStore';

const UploadBody = () => {
  const {
    upload,
    formData,
    protectionType,
    species,
    gender,
    isNeutered,
    vaccinations,
  } = petUploadStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('petProfileImage', formData.profileImage);
    formDataToSend.append(
      'pet',
      JSON.stringify({
        name: formData.name,
        species: species,
        age: formData.age,
        breed: formData.breed,
        rescueLocation: formData.rescueLocation,
        protectionType: protectionType,
        gender: gender,
        isNeutered: isNeutered === '했어요' ? 1 : 0,
        weight: formData.weight,
        info: formData.info,
        vaccinations: vaccinations,
      }),
    );

    await upload(formDataToSend).then(() => {
      alert('게시물 등록에 성공했습니다!');
      navigate('/care-list');
    });
  };

  return (
    <BodySection>
      <div className="body__main">
        <LoadImage />
        <span className="body__message bold">동물 정보를 입력해주세요</span>
        <InputSection>
          {body_question_list.map((data, index) => {
            return data.type === 'buttons' ? (
              <SelectionField
                key={index}
                name={data.name}
                title={data.title}
                caseA={data.caseA}
                caseB={data.caseB}
                description={data.description}
              />
            ) : data.type === 'vaccination' ? (
              <SelectVaccination key={index} />
            ) : (
              <UploadInputField
                key={index}
                className="input__title"
                type={data.type}
                label={data.label}
                placeholder={data.placeholder}
                name={data.name}
                isRequired={data.isRequired}
                maxLength={data.maxLength}
              />
            );
          })}
        </InputSection>
        <div className="section__submit">
          <ButtonSubmit
            $bgColor={colors.light_blue}
            $fontColor={colors.pastel_blue}
            onClick={() => navigate(-1)}
            className="bold"
          >
            취소
          </ButtonSubmit>
          <ButtonSubmit
            type="submit"
            $bgColor={colors.pastel_blue}
            $fontColor="#ffffff"
            className="bold"
            onClick={handleSubmit}
          >
            등록
          </ButtonSubmit>
        </div>
      </div>
    </BodySection>
  );
};

export default UploadBody;
