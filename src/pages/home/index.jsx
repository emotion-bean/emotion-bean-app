import Nav from "../../components/elements/nav";
import Title from "../../components/elements/title";
import * as S from "./style";

const Home = () => {
  return (
    <S.Container>
      <Title title="나무 키우기" />
      <Nav />
    </S.Container>
  );
};

export default Home;
