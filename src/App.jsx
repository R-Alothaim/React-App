import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { FlashcardProvider } from './context/FlashcardContext';
import './App.css';

function App() {
  return (
    <FlashcardProvider>
      <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>
    </FlashcardProvider>
  );
}

export default App;
