import './css/custom.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Member from './pages/Member';
import MemberForm from './pages/MemberForm';
import MemberUpdateForm from './pages/MemberUpdateForm';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/member/new" element={<MemberForm />} />
        <Route path="/member/:num/edit" element={<MemberUpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
