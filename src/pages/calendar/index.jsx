import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../components/elements/nav";
import * as S from "./style";
import ReactCalendar from "react-calendar";
import { format, getDaysInMonth } from "date-fns"; // ✅ 월별 마지막 날짜 가져오기
import { useCalendarState } from "../../store/useCalendarState";
import { useNavState } from "../../store/useNavState"; 

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [diaryData, setDiaryData] = useState({});
  const { setCalendarState } = useCalendarState();
  const { setNavState } = useNavState();
  const email = "test@example.com"; 

  const emotionIcons = {
    "기뻐요": "images/pink_peach.svg",
    "화나요": "images/yellow_peach.svg",
    "그저그래요": "images/skyblue_peach.svg",
    "슬퍼요": "images/purple_peach.svg"
  };

  useEffect(() => {
    const fetchDiaryData = async () => {
      let newDiaryData = {};
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const lastDay = getDaysInMonth(new Date(year, month - 1)); // ✅ 해당 월의 마지막 날짜 가져오기

      for (let i = 1; i <= lastDay; i++) { // ✅ `lastDay`까지만 반복
        const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${i.toString().padStart(2, "0")}`;

        try {
          const response = await axios.get(`http://localhost:3000/diary/show/${email}?date=${formattedDate}`);
          
          if (response.data.success && response.data.diary.length > 0) {
            const diary = response.data.diary[0];
            newDiaryData[formattedDate] = {
              emotion: diary.emotion,
              img: diary.image,
              title: diary.title || "제목 없음",
              detail: diary.content || "내용 없음"
            };
          }
        } catch (error) {
          newDiaryData[formattedDate] = null;
        }
      }

      console.log("📅 Fetched Diary Data: ", newDiaryData);
      setDiaryData(newDiaryData);
    };

    fetchDiaryData();
  }, [date]);

  const handleDateClick = (selectedDate) => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    const diaryEntry = diaryData[formattedDate];

    if (diaryEntry) {
      setNavState("HISTORY"); 
      localStorage.setItem("historyData", JSON.stringify({
        date: formattedDate,
        status: diaryEntry.emotion,
        img: diaryEntry.img,
        detail: diaryEntry.detail,
        title: diaryEntry.title
      }));
    }
  };

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
            
            tileContent={({ date, view }) => {
              if (view === "month") {
                const formattedDate = format(date, "yyyy-MM-dd");
                const diaryEntry = diaryData[formattedDate];
                const today = new Date();
                const isPastOrToday = date <= today; // 오늘 날짜 이전만 표시
            
                return (
                  isPastOrToday && (
                    <div 
                      onClick={() => handleDateClick(date)} 
                      style={{ 
                        position: "relative", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center"
                      }}
                    >
                      <img
                        src={diaryEntry ? emotionIcons[diaryEntry.emotion] : "images/no_peach.svg"}
                        alt={diaryEntry ? diaryEntry.emotion : "일기 없음"}
                        style={{ 
                          width: 31, 
                          height: 31, 
                          position: "absolute", 
                          bottom: "17px" // 날짜 위에 정렬
                        }}
                      />
                    </div>
                  )
                );
              }
            }}
                   
          />
        </S.StyledCalendarWrapper>
      </S.CalendarContainer>

      <Nav />
    </S.Container>
  );
};

export default Calendar;
