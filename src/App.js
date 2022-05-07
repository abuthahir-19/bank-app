import './App.css';
import Navbar from './components/Navbar/Navbar';
import MidPart from './components/MiddlePart/MidPart';
import Reason from './components/Reason/Reason';
import Blog from './components/BlogSection/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <MidPart />
        <Reason />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;