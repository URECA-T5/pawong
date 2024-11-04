import React from 'react';
import { petUploadStore } from '../../../stores/petUploadStore';
import { ButtonChoice } from '../../../style/care/upload/petUpload';

const SelectionField = ({ name, title, caseA, caseB, description }) => {
  const {
    species,
    setSpecies,
    bread,
    setBread,
    isNeutered,
    setIsNeutered,
    gender,
    setGender,
    protectionType,
    setProtectionType,
  } = petUploadStore();

  const getHandleFunc = () => {
    switch (name) {
      case 'species':
        return [species, setSpecies];
      case 'bread':
        return [bread, setBread];
      case 'gender':
        return [gender, setGender];
      case 'isNeutered':
        return [isNeutered, setIsNeutered];
      case 'protectionType':
        return [protectionType, setProtectionType];
    }
  };

  const [target, setTarget] = getHandleFunc();

  const handleClick = (val) => {
    setTarget(val === target ? '' : val);
  };

  return (
    <div>
      <span className="text__title regular">{title}</span>
      <div className="section__buttons">
        <ButtonChoice
          className="regular"
          $isClicked={target === caseA ? true : false}
          onClick={() => handleClick(caseA)}
        >
          {caseA}
        </ButtonChoice>
        <ButtonChoice
          className="regular"
          $isClicked={target === caseB ? true : false}
          onClick={() => handleClick(caseB)}
        >
          {caseB}
        </ButtonChoice>
      </div>
      {description && (
        <div className="text__sub-title regular">{description}</div>
      )}
    </div>
  );
};

export default SelectionField;
