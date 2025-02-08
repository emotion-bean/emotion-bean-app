import Nav from "../../components/elements/nav";
import * as S from "./style";
import { useCalendarState } from "../../store/useCalendarState";

const Tree = () => {
  const { setCalendarState } = useCalendarState();
  const locateList = [
    [30, 20],
    [30, 10],
    [30, 50],
    [17, 40],
    [13, 28],
    [65, 20],
    [45, 60],
    [46, 39],
    [40, 75],
    [40, 50],
    [60, 70],
    [50, 19],
    [23, 80],
    [17, 63],
  ];

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
      <S.TreeContainer>
        <S.Tree src="/images/tree.svg" />
        {locateList.map((locate, index) => (
          <S.Peach
            key={index}
            src="/images/yellow_peach.svg"
            style={{
              top: `${locate[0]}%`,
              left: `${locate[1]}%`,
            }}
          />
        ))}
      </S.TreeContainer>
      <Nav />
    </S.Container>
  );
};

export default Tree;
