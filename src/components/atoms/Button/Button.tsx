import "./ButtonStyles.css";

interface ButtonProps {
  text: string;
  onClickFunction: (params: any) => void;
  backgroundColor: string;
}

const Button = ({ text, onClickFunction, backgroundColor }: ButtonProps) => {
  return (
    <button
      style={{ backgroundColor: backgroundColor }}
      className="custom-buton"
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
};

export default Button;
