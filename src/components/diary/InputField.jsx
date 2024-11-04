import { diaryStore } from '../../stores/diaryStore';
import { RequiredStar } from '../../style/careDiary/careDiary';
export const InputField = ({ label, type, placeholder, maxLength, name }) => {
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
          value={formData[name]}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
