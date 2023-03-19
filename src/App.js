import NotePage from "./views/NotePage/NotePage";
import PomodorePage from "./views/PomodorePage/PomodorePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  // const location = useLocation();
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate>
          <Routes>
            <Route path="/learning.help/" element={<NotePage />} />
            <Route path="/pomodore" element={<PomodorePage />} />
          </Routes>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

export default App;
