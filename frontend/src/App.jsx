import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Page from "./components/Page"
import DetailBox from "./components/DetailBox"
import Features from './components/Features'
import FormCard from './components/FormCard'
import Footer from './components/Footer';
import Translate from './components/Translate';
import Services from "./components/Services";

function App() {
  return (
    <>
      {/* <Translate /> */}
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/FormCard" element={<FormCard />} />
          <Route path="/DetailBox" element={<DetailBox />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Translate" element={<Translate />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App
