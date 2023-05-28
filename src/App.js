import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterStudentPage from "./pages/RegisterStudentPage";
import SendProjectPage from "./pages/SendProjectPage";
import StudentPage from "./pages/StudentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/register" element={<RegisterStudentPage />} />
        <Route path="/projects/send" element={<SendProjectPage />} />
        <Route path="/projects" element={<StudentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
