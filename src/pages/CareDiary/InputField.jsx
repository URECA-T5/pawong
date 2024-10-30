import { diaryStore } from '../../stores/diaryStore';

export const InputField = ({
  label,
  type,
  placeholder,
  maxLength,
  name,
  required,
}) => {
  const { formData, setFormData } = diaryStore();

  const handleChange = (e) => {
    setFormData(name, e.target.value);
  };

  return (
    <div>
      <p className="input__title">{label}</p>
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
          required={required}
        />
      )}
    </div>
  );
};
