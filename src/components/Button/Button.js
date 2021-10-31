import * as S from './styles';

const Button = ({ type, variant, icon, value, onClick, customClass }) => {
  let btnClass = customClass || '';

  if (variant === 'text')
    return (
      <S.TextBtn type={type} className={btnClass} onClick={onClick}>
        {value}
      </S.TextBtn>
    );

  return (
    <S.IconBtn type={type} className={btnClass} onClick={onClick}>
      <span className="material-icons">{icon}</span>
    </S.IconBtn>
  );
};

export default Button;
