import { useState } from "react";
import Nav from "../../components/elements/nav";
import * as S from "./style";
import ReactCalendar from "react-calendar";
import { format } from "date-fns";
import { useCalendarState } from "../../store/useCalendarState";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const { setCalendarState } = useCalendarState();
  return (
    <S.Container>
      <S.OptionWrapper>
        <S.IconWrapper>
          <S.OptionIcon src="/images/search.svg" />
          <S.OptionIcon src="/images/alarm.svg" />
          <S.OptionIcon
            src="/images/treepage.svg"
            onClick={() => setCalendarState("TREE")}
          />
        </S.IconWrapper>
      </S.OptionWrapper>
      <S.CalendarContainer>
        <S.StyledCalendarWrapper>
          <ReactCalendar
            onChange={setDate}
            value={date}
            prev2Label={null}
            next2Label={null}
            prevLabel={<img src="/images/prevArrow.svg" alt="Previous" />}
            nextLabel={<img src="/images/nextArrow.svg" alt="Next" />}
            view="month"
            showNeighboringMonth={false}
            formatDay={(locale, date) => format(date, "d")}
            formatYear={(locale, date) => format(date, "yyyy")}
            formatMonthYear={(locale, date) => format(date, "yyyy년 MM월")}
            tileClassName="no-underline"
          />
        </S.StyledCalendarWrapper>
      </S.CalendarContainer>
      <Nav />
    </S.Container>
  );
};

export default Calendar;
