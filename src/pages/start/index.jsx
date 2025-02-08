import * as S from "./style";
import { useNavState } from "../../store/useNavState";

const Start = () => {
  const { setNavState } = useNavState();
  return (
    <S.Container>
      <S.Logo src="/images/logo.svg" />
      <S.LoginWrapper
        onClick={() => {
          setNavState("REGISTER");
        }}
      >
        <S.Kakao>
          <S.LoginImage src="/images/kakao.svg" />
          <S.LoginText>카카오 로그인</S.LoginText>
        </S.Kakao>
        <S.Google>
          <S.LoginImage src="/images/google.svg" />
          <S.LoginText>Google 로그인</S.LoginText>
        </S.Google>
      </S.LoginWrapper>
    </S.Container>
  );
};

export default Start;
