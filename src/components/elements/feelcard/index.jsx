import * as S from "./style";

const FeelCard = ({ img, status, setState, state }) => {
  return (
    <S.Container onClick={() => setState(status)} state={state === status}>
      <S.Icon src={img} />
      <S.IconText>{status}</S.IconText>
    </S.Container>
  );
};

export default FeelCard;
