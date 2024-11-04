import React from 'react';
import {
  BodySection,
  ButtonSubmit,
  InputSection,
} from '../../../style/care/upload/petUpload';
import LoadImage from './LoadImage';
import UploadInputField from './UploadInputField';
import SelectionField from './SelectionField';
import SelectVaccination from './SelectVaccination';

const body_question_list = [
  {
    type: 'input',
    label: '이름',
    placeholder: '임보 동물 이름 입력',
    name: 'name',
    isRequired: true,
    maxLength: 20,
  },
  {
    type: 'buttons',
    name: 'protectionType',
    title: '임보 종류',
    caseA: '일반 임보',
    caseB: '긴급 임보',
    description:
      '* 긴급 임보는 1주일 이후에 보호소로 보내지는 경우에 선택 해주세요.',
  },
  {
    type: 'buttons',
    name: 'species',
    title: '임보동물 종류',
    caseA: '강아지',
    caseB: '고양이',
  },
  {
    type: 'input',
    label: '품종',
    placeholder: '품종을 입력해주세요',
    name: 'bread',
    isRequired: true,
    maxLength: 20,
  },
  {
    type: 'buttons',
    name: 'gender',
    title: '성별',
    caseA: '여아',
    caseB: '남아',
  },
  {
    type: 'buttons',
    name: 'isNeutered',
    title: '중성화 수술 여부',
    caseA: '했어요',
    caseB: '안했어요',
  },
  {
    type: 'vaccination',
  },
  {
    type: 'input',
    label: '구조지역',
    placeholder: '어디서 구조했나요?',
    name: 'rescueLocation',
    isRequired: true,
    maxLength: 200,
  },
  {
    type: 'input',
    label: '나이',
    placeholder: '임보 동물의 나이를 입력해주세요',
    name: 'age',
    isRequired: true,
    maxLength: 20,
  },
  {
    type: 'input',
    label: '몸무게',
    placeholder: '예) 32 (kg)',
    name: 'weight',
    isRequired: true,
    maxLength: 20,
  },
  {
    type: 'textarea',
    label: '정보',
    placeholder: '현재상황 및 임보동물에 대한 이야기 모두 좋아요',
    name: 'info',
    isRequired: true,
    maxLength: 300,
  },
];

const colors = {
  dark_grey: '#6D6E71',
  light_grey: '#B3B3B3',
  pastel_grey: '#F3F3F6',
  light_blue: '#E3ECFF',
  pastel_blue: '#5850FE',
};

const UploadBody = () => {
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
            className="bold"
          >
            취소
          </ButtonSubmit>
          <ButtonSubmit
            $bgColor={colors.pastel_blue}
            $fontColor="#ffffff"
            className="bold"
          >
            등록
          </ButtonSubmit>
        </div>
      </div>
    </BodySection>
  );
};

export default UploadBody;
