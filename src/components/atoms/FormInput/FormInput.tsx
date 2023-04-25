import "./FormInputStyles.css";

interface FormInputProps {
  type: string;
  value: string;
  name: string;
  onChange: (params: any) => void;
  placeholder: string;
  reference: any;
  errorMessage: string;
}

const FormInput = ({
  type = "text",
  value,
  name,
  onChange,
  placeholder,
  reference,
  errorMessage,
}: FormInputProps) => {
  return (
    <div className="form-input-container" ref={reference}>
      <input
        className="from-input"
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
