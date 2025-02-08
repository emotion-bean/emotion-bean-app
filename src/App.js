import { useCalendarState } from "./store/useCalendarState";
import { useNavState } from "./store/useNavState";
import Calendar from "./pages/calendar";
import Profile from "./pages/profile";
import Tree from "./pages/tree";
import Write from "./pages/write";
import History from "./pages/history";
import Start from "./pages/start";

function App() {
  const { navState } = useNavState();
  const { calendarState } = useCalendarState();

  return navState === "START" ? (
    <Start />
  ) : navState === "CALENDAR" ? (
    calendarState === "CALENDAR" ? (
      <Calendar />
    ) : (
      <Tree />
    )
  ) : navState === "PROFILE" ? (
    <Profile />
  ) : (
    <Write />
  );
}

export default App;
