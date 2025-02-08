import Nav from "../../components/elements/nav";
import * as S from "./style";
import { useCalendarState } from "../../store/useCalendarState";

const Tree = () => {
  const { setCalendarState } = useCalendarState();
  return (
    <S.Container>
      <S.OptionWrapper>
        <S.IconWrapper>
          <S.OptionIcon src="/images/search.svg" />
          <S.OptionIcon src="/images/alarm.svg" />
          <S.OptionIcon
            src="/images/calendarpage.svg"
            onClick={() => setCalendarState("CALENDAR")}
          />
        </S.IconWrapper>
      </S.OptionWrapper>
      <S.Tree src="/images/tree.svg" />
      <Nav />
    </S.Container>
  );
};

export default Tree;
