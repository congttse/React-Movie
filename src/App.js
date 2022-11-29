import { Route, Routes } from "react-router-dom";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Add from "./components/Add/Add"
import PresentationFilms from "./components/PresentationFilms/PresentationFilms";
import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard'
import Protected from "./components/Protected/Protected";
import Update from "./components/Update/Update";
import About from './components/About/About'
import Contact from "./components/Contact/Contact";
import Feedback from "./components/Feedback/Feedback";
import Details from "./components/Details/Details";
function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<PresentationFilms />} />
        <Route path="/login" element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/feedback" element={<Protected><Feedback /></Protected>} />
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
        <Route path="/add" element={<Protected><Add /></Protected>} />
        <Route path="/update/:id" element={<Protected><Update /></Protected>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
