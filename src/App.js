import { useNavState } from "./components/store/useNavState";
import Calendar from "./pages/calendar";
import History from "./pages/history";
import Profile from "./pages/profile";

function App() {
  const { navState } = useNavState();
  return navState === "CALENDAR" ? (
    <Calendar />
  ) : navState === "PROFILE" ? (
    <Profile />
  ) : (
    <History />
  );
}

export default App;
