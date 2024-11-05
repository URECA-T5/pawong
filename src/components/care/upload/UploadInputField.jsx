// import { m } from 'framer-motion';
import React from 'react';
import { RequiredStar } from '../../../style/care/diary/careDiaryUpload';
import { petUploadStore } from '../../../stores/petUploadStore';

const UploadInputField = ({
  label,
  type,
  placeholder,
  maxLength,
  name,
  isRequired,
}) => {
  const { formData, setFormData } = petUploadStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <div>
      <p className="text__title regular">
        {label}
        {isRequired && <RequiredStar>*</RequiredStar>}
      </p>
      {type === 'textarea' ? (
        <textarea
          maxLength={maxLength}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
        />
      ) : (
        <input
          className="section__input-field regular"
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          required={isRequired ? true : ''}
        />
      )}
    </div>
  );
};

export default UploadInputField;
