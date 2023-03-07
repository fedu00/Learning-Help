import NotePage from "./components/organism/NotePage/NotePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainTemplate from "./components/MainTemplate/MainTemplate";

function App() {
  return (
    <Router>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<NotePage />} />
        </Routes>
      </MainTemplate>
    </Router>
  );
}

export default App;
