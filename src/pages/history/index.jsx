import { useEffect, useState } from "react";
import * as S from "./style";
import { useNavState } from "../../store/useNavState";

const emotionIcons = {
  "기뻐요": "/images/pink_peach.svg",
  "화나요": "/images/yellow_peach.svg",
  "그저그래요": "/images/skyblue_peach.svg",
  "슬퍼요": "/images/purple_peach.svg"
};

const History = () => {
  const { setNavState } = useNavState();
  const [historyData, setHistoryData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("historyData"));
    setHistoryData(storedData);
  }, []);

  if (!historyData) return <p>데이터 없음</p>;

  return (
    <S.Container>
      <S.Arrow
        src="/images/prevarrow.svg"
        onClick={() => setNavState("CALENDAR")}
      />
      <S.DateContainer>{historyData.date}</S.DateContainer>
      <S.Icon src={emotionIcons[historyData.status]} />
      <S.ImageContainer>
        <S.MainImage src={historyData.img} alt="이미지 없음" />
        <S.Title>{historyData.title}</S.Title>
      </S.ImageContainer>
      <S.Detail>{historyData.detail}</S.Detail>
    </S.Container>
  );
};

export default History;
