import './App.css';
import Routes from './routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
