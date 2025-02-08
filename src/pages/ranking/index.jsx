import Nav from "../../components/elements/nav";
import * as S from "./style";

const Ranking = () => {
  return (
    <S.Container>
      <S.Title>랭킹</S.Title>
      <S.RankingBox rank={1}>
        <S.InfoBox>
          <S.Rank>1</S.Rank>
          랭크
        </S.InfoBox>
        1일
      </S.RankingBox>
      <Nav />
    </S.Container>
  );
};

export default Ranking;
