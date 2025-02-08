import * as S from "./style";
import { useNavState } from "../../store/useNavState";

const History = ({ date, status, img, detail, title }) => {
  const { setNavState } = useNavState();
  return (
    <S.Container>
      <S.Arrow
        src="/images/prevarrow.svg"
        onClick={() => setNavState("CALENDAR")}
      />
      <S.DateContainer>{date}</S.DateContainer>
      <S.Icon
        src={
          status === "good"
            ? "/images/pink_peach.svg"
            : status === "angry"
            ? "/images/yellow_peach.svg"
            : status === "soso"
            ? "/images/skyblue.svg"
            : "/images/purple_peach.svg"
        }
      />
      <S.ImageContainer>
        <S.MainImage src={img} alt="이미지 없음" />
        <S.Title>{title}</S.Title>
      </S.ImageContainer>
      <S.Detail>{detail}</S.Detail>
    </S.Container>
  );
};

export default History;
