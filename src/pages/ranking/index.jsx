import * as S from "./style";

const Ranking = () => {
  return (
    <S.Container>
      <S.Title>랭킹</S.Title>
      <S.RankingBox rank={"1"}>
        <S.InfoBox>
          <S.Rank>{rank}</S.Rank>
          {name}
        </S.InfoBox>
        {"1일"}
      </S.RankingBox>
    </S.Container>
  );
};

export default Ranking;
