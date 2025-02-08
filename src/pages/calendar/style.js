import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/images/background.svg");
  background-size: cover;
  background-position: center;
`;

export const OptionWrapper = styled.div`
  margin-top:1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const OptionIcon = styled.img`
  width: 1.5rem;
`;

export const CalendarContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
`;

export const StyledCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;

  .react-calendar {
    width: 90%;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 0;
  }

  .react-calendar__navigation button:enabled {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 80px;
    width: 80px;
  }

  /* 요일 */
  .react-calendar__month-view__weekdays {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    width: 100%; /* 전체 너비를 지정하여 날짜와 맞게 조정 */
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    font-weight: bold;
    color: black;
    flex: 1; /* 각 요일을 동일하게 정렬 */
    font-size: 1.4rem; /* 요일 글씨 크기 조정 */
    padding: 0.5rem 0; /* 위 아래 여백 추가 */
  }

  /* 날짜 */
  .react-calendar button {
    background-color: transparent;
    color: black;
    border: none;
    font-size: 1.2rem; /* 날짜 글씨 크기 */
    padding: 0;
    margin: 0;
    width: 100%; /* 버튼을 가득 채워서 일정하게 만듬 */
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile--active {
    background-color: #7fdb6f;
    color: white;
  }

  /* 비활성화된 버튼 */
  .react-calendar button:disabled {
    background-color: transparent;
    color: gray;
  }
`;
