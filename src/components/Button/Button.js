import * as S from './styles';

const Button = ({ type, variant, icon, value, onClick, className }) => {
  if (variant === 'text')
    return (
      <S.TextBtn type={type} className={className} onClick={onClick}>
        {value}
      </S.TextBtn>
    );

  return (
    <S.IconBtn type={type} className={className} onClick={onClick}>
      <span className="material-icons">{icon}</span>
    </S.IconBtn>
  );
};

export default Button;
