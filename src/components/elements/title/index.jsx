import * as S from "./style";
import { useNavState } from "../../store/useNavState";

const Title = () => {
  const { navState } = useNavState();
  return (
    <S.Container>
      {navState === "CALENDAR"
        ? "나무 키우기"
        : navState === "PROFILE"
        ? "프로필"
        : "기록 보기"}
    </S.Container>
  );
};

export default Title;
