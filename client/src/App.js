import './App.css';
import Users from './components/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateForm from './components/UpdateForm';
import AddUserForm from './components/AddUserForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/update/:mail" element={<UpdateForm />} />
        <Route path="/addUser" element={<AddUserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
