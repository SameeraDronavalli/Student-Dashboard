import './App.css';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentsData from './api/StudentsData';
import AttendanceSummary from './Pages/AttendanceSummary';
function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/students' element={<StudentsData />} />
          <Route path='/chart' element={<AttendanceSummary />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
