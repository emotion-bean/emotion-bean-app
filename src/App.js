import { useCalendarState } from "./store/useCalendarState";
import { useNavState } from "./store/useNavState";
import Calendar from "./pages/calendar";
import Profile from "./pages/profile";
import Tree from "./pages/tree";
import Write from "./pages/write";
import History from "./pages/history";
import Start from "./pages/start";
import Register from "./pages/register";

function App() {
  const { navState } = useNavState();
  const { calendarState } = useCalendarState();

  return navState === "START" ? (
    <Start />
  ) : navState === "REGISTER" ? (
    <Register />
  ) : navState === "HISTORY" ? (
    <History />
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
