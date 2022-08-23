import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Feature_1 from './components/Feature/Feature_1';
import Feature_2 from './components/Feature/Feature_2';
import Feature_3 from './components/Feature/Feature_3';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/feature_1" element={<Feature_1/>} />
        <Route path="/feature_2" element={<Feature_2/>} />
        <Route path="/feature_3" element={<Feature_3/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
}

export default App;
