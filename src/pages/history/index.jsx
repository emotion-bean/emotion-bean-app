import { useEffect, useState } from "react";
import * as S from "./style";
import { useNavState } from "../../store/useNavState";
import { CallGPT } from "../../store/callChatGPT";

const emotionIcons = {
  기뻐요: "/images/pink_peach.svg",
  화나요: "/images/yellow_peach.svg",
  그저그래요: "/images/skyblue_peach.svg",
  슬퍼요: "/images/purple_peach.svg",
};

const History = () => {
  const { setNavState } = useNavState();
  const [historyData, setHistoryData] = useState(null);
  const [gptResponse, setGptResponse] = useState(""); // GPT 응답 저장

  useEffect(() => {
    handleGPTCall();
  }, []);

  const handleGPTCall = async () => {
    if (!historyData?.detail) {
      console.error("❌ 상세 정보(detail)가 없습니다.");
      return;
    }
    const data = await CallGPT(historyData.detail);
    console.log("GPT 응답:", data);
    setGptResponse(data);
  };

  // ✅ 로컬 스토리지에서 데이터 불러오기
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
      <S.ImageContainer>
        <S.Icon src="/images/congcong.svg" />
        <S.Title>앱잼에서의 하루</S.Title>
        <S.Detail>{gptResponse || "GPT 응답을 불러오는 중..."}</S.Detail>{" "}
      </S.ImageContainer>
    </S.Container>
  );
};

export default History;
