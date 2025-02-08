import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../components/elements/nav";
import * as S from "./style";

const Ranking = () => {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/ranking");
        setRankingData(response.data); 
      } catch (error) {
        console.error("랭킹 데이터 오류", error);
      }
    };

    fetchRanking();
  }, []);

  return (
    <S.Container>
      <S.Title>랭킹</S.Title>
      <S.RankingWrapper>
        {rankingData.map((user, index) => (
          <S.RankingBox key={user._id} rank={index + 1}>
            <S.InfoBox>
              <S.Rank rank={index + 1}>{index + 1}</S.Rank>
              {user.name}{}
            </S.InfoBox>
            {user.count}일
          </S.RankingBox>
        ))}
      </S.RankingWrapper>
      <Nav />
    </S.Container>
  );
};

export default Ranking;
