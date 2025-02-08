import * as S from "./style";
import { useNavState } from "../../store/useNavState";
import { useState } from "react";

const Register = () => {
  const { setNavState } = useNavState();
  const [nickname, setNickName] = useState();
  return (
    <S.Container>
      <S.TopWrapper>
        <S.Arrow
          src="/images/prevarrow.svg"
          onClick={() => setNavState("START")}
        />
        <S.Title>회원가입</S.Title>
        {/* setNavState("CALENDAR");
                setCalendarState("CALENDAR"); */}
      </S.TopWrapper>
      <S.FixProfile src="/images/editprofile.svg" />
      <S.InputContainer>
        <S.InputTitle>닉네임</S.InputTitle>
        <S.Input
          placeholder="닉네임을 입력하세요"
          onChange={(e) => setNickName(e.target.value)}
        />
      </S.InputContainer>
      <S.ConfirmButton
        isDone={nickname}
        onClick={() => setNavState("CALENDAR")}
      >
        완료
      </S.ConfirmButton>
    </S.Container>
  );
};

export default Register;
