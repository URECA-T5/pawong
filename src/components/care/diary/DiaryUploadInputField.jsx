import { diaryStore } from '../../../stores/diaryStore';
import { RequiredStar } from '../../../style/care/diary/careDiaryUpload';

export const InputField = ({
  label,
  type,
  placeholder,
  maxLength,
  name,
  options,
}) => {
  const { formData, setFormData } = diaryStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <div className="regular">
      <p className="input__title">
        {label}
        {name === 'title' && formData[name] === '' && (
          <RequiredStar>*</RequiredStar>
        )}
      </p>
      {type === 'textarea' ? (
        <textarea
          maxLength={maxLength}
          placeholder={placeholder}
          value={formData[name] || ''}
          onChange={handleChange}
        />
      ) : type === 'select' ? (
        <select
          name={name}
          value={formData[name] || ''}
          onChange={handleChange}
          required
        >
          <option value="">{placeholder}</option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      ) : (
        <input
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          value={formData[name] || ''}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
