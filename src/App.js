import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/contact-us/ContactUs';
import Home from "./components/Home/Home";
import Careers from './components/careers/Careers';
import AboutUs from './components/about-us/AboutUs';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="contact" element={<ContactUs />} />
				<Route path="careers" element={<Careers />} />
				<Route path="aboutus" element={<AboutUs />} />
			</Routes>
		</BrowserRouter >
	);
}

export default App;
