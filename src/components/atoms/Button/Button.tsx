import "./ButtonStyles.css";

interface ButtonProps {
  text: string;
  onClickFunction: (params: any) => void;
  backgroundColor: string;
  disabled?: boolean;
}

const Button = ({
  text,
  onClickFunction,
  backgroundColor,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: backgroundColor }}
      className="custom-buton"
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
};

export default Button;
