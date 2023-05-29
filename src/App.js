import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterStudentPage from "./pages/RegisterStudentPage";
import SendProjectPage from "./pages/SendProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import StudentPage from "./pages/StudentPage";
import EditStudentPage from "./pages/EditStudentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/register" element={<RegisterStudentPage />} />
        <Route path="/students/:id" element={<StudentPage />} />
        <Route path="/students/edit/:id" element={<EditStudentPage />} />
        <Route path="/projects/send" element={<SendProjectPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
