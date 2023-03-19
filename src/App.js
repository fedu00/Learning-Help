import NotePage from "./views/NotePage/NotePage";
import PomodorePage from "./views/PomodorePage/PomodorePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate>
          <Routes>
            <Route path="/Learning-Help/" element={<NotePage />} />
            <Route path="/pomodore" element={<PomodorePage />} />
          </Routes>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

export default App;
