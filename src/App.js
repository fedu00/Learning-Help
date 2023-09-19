import NotePage from "./views/NotePage/NotePage";
import PomodorePage from "./views/PomodorePage/PomodorePage";
import Flashcards from "./views/Flashcards/Flashcards";
import ExperiencePage from "./views/ExperiencePage/ExperiencePage";
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
            <Route path="/study.help" element={<NotePage />} />
            <Route path="/pomodore" element={<PomodorePage />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/experience" element={<ExperiencePage />} />
          </Routes>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

export default App;
