import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import LogoArea from './components/LogoArea/LogoArea';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Navbar/Profile/Profile';
import Aside from './components/Aside/Aside';
import Messanger from './components/Navbar/Messanger/Messanger';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LogoArea />
        <div className="container">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/Messanger" element={<Messanger />} />
          </Routes>
          <Aside />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
